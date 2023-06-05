import { Get, Post, Body, Req, Res, Controller,
         UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { Request, Response } from 'express';

//localhost:8000/auth/signin

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '로그인(signin)' })
  @Post('signin')
  async signin(@Body() data: LoginRequestDto,  @Res() res: Response): Promise<any> {
    const jwt = await this.authService.jwtSignIn(data)

    // jwt 토큰을 cookie에 담아서 전달한다.
  res.setHeader('Authorization', 'Bearer '+jwt.token);
  res.cookie('jwt',jwt.token,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //1 day
    });
  return res.send({
        message: 'success'
    });
  }
  // 단순히 쿠키의 jwt 값을 읽어서 리턴한다.
  @ApiOperation({ summary: '쿠키값 읽기' })
  @Get('/cookies')
  getCookies(@Req() req: Request, @Res() res: Response): any {
      const jwt = req.cookies['jwt'];
      return res.send(jwt);
  }
// sign out 하면, jwt.accessToken 값을 없애고, 유효기간을 0으로 설정한다.
  @ApiOperation({ summary: '로그아웃 (signout)' })  
  @Post('/signout')
  logout(@Res() res: Response): any {
      res.cookie('jwt', '', {
          maxAge: 0
      });
      return res.send({
          message: 'success'
      })
  }
}


import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ExpertDto, ExpertsCreateDto } from '../dto/experts.create.dto';
// import { ExpertsUpdateDto } from '../dto/experts.update.dto';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ExpertsService } from '../services/experts.service';

@ApiTags('experts')
@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertsService: ExpertsService) {}

  @ApiOperation({summary: '전문가에게 첨삭받기'})
  @Post()
  @UseGuards(JwtAuthGuard)
  async createPost(@Body() expertCreateDto: ExpertsCreateDto, @CurrentUser() userInfo) {
    const author = userInfo._id
    expertCreateDto.author = author;
    return await this.expertsService.createPost(expertCreateDto);
  }

  @ApiOperation({summary: '내 자기소개서 전체 목록'})
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllPost(): Promise<ExpertDto[]> {
    return await this.expertsService.getAllPost();
  }

  @ApiOperation({summary: '내 자기소개서 상세 내용'})
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getPostById(@Param('id') postId: string): Promise<ExpertDto> {
    return await this.expertsService.getPostById(postId);
  }

  // @ApiOperation({summary: '내 자기소개서 수정'})
  // @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  // async updatePost(@Param('id') postId: string, @Body() updatePost: ExpertsUpdateDto): Promise<ExpertDto> {
  //   return await this.expertsService.updatePost(postId, updatePost);
  // }

  @ApiOperation({summary: '내 자기소개서 삭제'})
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deletePostById(@Param('id') postId: string) {
    return await this.expertsService.deletePostById(postId);
  }

  // author 확인해서 삭제하도록 적용 필요
  // @ApiOperation({summary: '내 자기소개서 전체 삭제'})
  // @Delete()
  // @UseGuards(JwtAuthGuard)
  // async deletePost() {
  //   return await this.expertsService.deleteAllPost();
  // }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ExpertsModule } from './experts/experts.module';
import { CommentsModule } from './comments/comments.module';
import * as mongoose from 'mongoose';
import { RolesGuard } from './common/guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    // cache: true 한번읽은 값 캐싱 읽기 속도 향상.
    // isGlobal: true ConfigModule을 다른 모듈에서 불러오는 번거로움 피함.
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    AuthModule,
    ExpertsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: 
            [
              AppService,
              { provide: APP_GUARD,
                useClass: RolesGuard,},
              ],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}
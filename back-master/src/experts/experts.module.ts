import { Module } from '@nestjs/common';
import { ExpertsController } from './controllers/experts.controller';
import { ExpertsService } from './services/experts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { Expert, ExpertSchema } from './experts.schema';
import { ExpertsRepository } from './experts.repository';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsRepository } from 'src/comments/comments.repository';
import { Comment, CommentSchema } from 'src/comments/comments.schema';

@Module({imports: [
    MongooseModule.forFeature([
      {name: Expert.name, schema: ExpertSchema},
      {name: Comment.name, schema: CommentSchema}
    ]),
    JwtModule,
    CommentsModule,
  ],
  controllers: [ExpertsController],
  providers: [ExpertsService, ExpertsRepository, CommentsRepository],
})
export class ExpertsModule {}
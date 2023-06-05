import { Module } from "@nestjs/common";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Comment, CommentSchema } from "./comments.schema";
import { Expert, ExpertSchema } from "src/experts/experts.schema";
import { CommentsRepository } from "./comments.repository";
import { ExpertsRepository } from "src/experts/experts.repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: Expert.name, schema: ExpertSchema },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository, ExpertsRepository],
})
export class CommentsModule {}

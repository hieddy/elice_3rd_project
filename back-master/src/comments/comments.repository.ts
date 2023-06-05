import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./comments.schema";

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comment.name) private readonly commentsModel: Model<Comment>
  ) {}

  async createComment(dto) {
    return await this.commentsModel.create(dto);
  }

  async updateComment(commentId, dto) {
    const { comment } = dto;
    const { id } = commentId;
    return await this.commentsModel.findOneAndUpdate({ _id: id }, { comment });
  }

  async findCommentInfo(commentId) {
    const { id } = commentId;
    const commentInfo = await this.commentsModel.find({ _id: id });
    return commentInfo;
  }

  async deleteComment(commentId) {
    const { id } = commentId;
    return await this.commentsModel.deleteOne({ _id: id });
  }
}

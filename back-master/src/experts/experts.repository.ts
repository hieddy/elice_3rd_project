import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Expert } from "./experts.schema";
import { ExpertsCreateDto } from './dto/experts.create.dto';
// import { ExpertsUpdateDto } from './dto/experts.update.dto';

@Injectable()
export class ExpertsRepository {
  constructor(@InjectModel(Expert.name) private expertModel: Model<Expert>) {}

  async createPost(postData: ExpertsCreateDto) {
    return await this.expertModel.create(postData)
  }

  async findAll() {
    return await this.expertModel.find();
  }

  async findByPostId(postId: string) {
    return await this.expertModel.findById(postId);
  }

  // async updatePost(postId: string, updatePost: ExpertsUpdateDto) {
  //   return await this.expertModel.findOneAndUpdate(
  //     { _id: postId },
  //     { $set: updatePost },
  //     { returnNewDocument: true }
  //   )
  // }

  async updateStatusToDone(dto) {
    const { content: id } = dto;
    return await this.expertModel.findOneAndUpdate(
      { _id: id },
      { status: "done" }
    );
  }

  async updateStatusToIng(contentId) {
    return await this.expertModel.findOneAndUpdate(
      { _id: contentId },
      { status: "ing" }
    );
  }

  async deleteByPostId(postId) {
    return await this.expertModel.deleteOne(postId)
  }

  async deleteAll() {
    return await this.expertModel.deleteMany()
  }
}

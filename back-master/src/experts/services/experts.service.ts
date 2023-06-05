import { BadRequestException, Injectable } from '@nestjs/common';
import { ExpertsRepository } from '../experts.repository';
import { ExpertsCreateDto } from '../dto/experts.create.dto';
import { CommentsRepository } from 'src/comments/comments.repository';
// import { ExpertsUpdateDto } from '../dto/experts.update.dto';

@Injectable()
export class ExpertsService {
  constructor(
    private readonly expertRepository: ExpertsRepository,
    private readonly commentsRepository: CommentsRepository,
  ) {}

    async createPost(postData: ExpertsCreateDto) {
      try {
        return await this.expertRepository.createPost(postData);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }

    async getAllPost() {
      try {
        return await this.expertRepository.findAll();
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }

    async getPostById(postId: string) {
      try {
        return await this.expertRepository.findByPostId(postId);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }

    // async updatePost(postId: string, updatePost: ExpertsUpdateDto) {
    //   try {
    //     // comments 남겨지면 내용 받아와야 하고, status 변경되어야 함 *****

    //     } catch (error) {
    //     throw new BadRequestException(error.message);
    //   }
    // }

    async deletePostById(postId: string) {
      try {
        return await this.expertRepository.deleteByPostId(postId)
      } catch (error) {
        throw new BadRequestException(error.message)
      }
    }

    async deleteAllPost() {
      try {
        return await this.expertRepository.deleteAll()
      } catch (error) {
        throw new BadRequestException(error.message)
      }
    }
}
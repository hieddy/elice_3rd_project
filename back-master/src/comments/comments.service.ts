import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { CommentsRepository } from "./comments.repository";
import { ExpertsRepository } from "../experts/experts.repository";

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository,
    private readonly expertRepository: ExpertsRepository
  ) {}

  async createComment(dto, userInfo) {
    const { id: author } = userInfo;
    dto = { ...dto, author };

    await this.expertRepository.updateStatusToDone(dto);
    return await this.commentsRepository.createComment(dto);
  }

  async updateComment(commentId, dto, userInfo) {
    const commentInfo = await this.commentsRepository.findCommentInfo(
      commentId
    );
    if (!commentInfo) {
      throw new NotFoundException("해당 댓글 없음");
    }

    const { author: authorId } = commentInfo[0];
    const { id: userId } = userInfo;
    // console.log(authorId, userId);
    if (authorId !== userId) {
      throw new UnauthorizedException("수정 권한 없음");
    }

    return await this.commentsRepository.updateComment(commentId, dto);
  }

  // async getComment() {}
  async deleteComment(commentId, userInfo) {
    const commentInfo = await this.commentsRepository.findCommentInfo(
      commentId
    );

    if (!commentInfo[0]) {
      throw new NotFoundException("해당 댓글 없음");
    }
    const { content: contentId, author: authorId } = commentInfo[0];
    const { id: userId } = userInfo;
    if (authorId !== userId) {
      throw new UnauthorizedException("삭제 권한 없음");
    }

    await this.expertRepository.updateStatusToIng(contentId);
    return await this.commentsRepository.deleteComment(commentId);
  }
}

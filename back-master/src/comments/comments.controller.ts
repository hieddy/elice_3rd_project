import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentCreateDto } from "./dto/comments.create.dto";
import { CommentUpdateDto } from "./dto/comments.update.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt.guard";
import { CurrentUser } from "src/common/decorators/user.decorator";

@Controller("comments")
@UseGuards(JwtAuthGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(@Body() dto: CommentCreateDto, @CurrentUser() userInfo) {
    return await this.commentsService.createComment(dto, userInfo);
  }

  @Patch(":id")
  async updateComment(
    @Body() dto: CommentUpdateDto,
    @Param() commentId,
    @CurrentUser() userInfo
  ) {
    return await this.commentsService.updateComment(commentId, dto, userInfo);
  }

  @Delete(":id")
  async deleteComment(@Param() commentId, @CurrentUser() userInfo) {
    return await this.commentsService.deleteComment(commentId, userInfo);
  }
}

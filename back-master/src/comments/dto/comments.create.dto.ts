import { PartialType, PickType } from "@nestjs/swagger";
import { Comment } from "../comments.schema";

export class CommentCreateDto extends PartialType(
  PickType(Comment, ["comment", "content"] as const)
) {}

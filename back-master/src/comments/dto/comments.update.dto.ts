import { PartialType } from "@nestjs/mapped-types";
import { Comment } from "../comments.schema";
import { PickType } from "@nestjs/swagger";

export class CommentUpdateDto extends PartialType(
  PickType(Comment, ["content"] as const)
) {}

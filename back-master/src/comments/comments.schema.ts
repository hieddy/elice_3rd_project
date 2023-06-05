import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaOptions, Types, Document } from "mongoose";

const options: SchemaOptions = { timestamps: true };

@Schema(options)
export class Comment extends Document {
  @Prop()
  comment: string;

  @Prop({ ref: "experts" })
  author: Types.ObjectId;

  // status:Types.ObjectId;

  @Prop({ ref: "comment" })
  content: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

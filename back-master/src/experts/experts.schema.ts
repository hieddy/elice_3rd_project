import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Document, SchemaOptions, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'experts'
};

@Schema(options)
export class Expert extends Document {
  @ApiProperty({
    description: '자기소개서 제목',
    required: true,
  })
  @Prop({requird: true})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: '자기소개서 본문',
    required: true,
  })
  @Prop({
    requird: true,
    maxlength: 5000
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(5000)
  content: string;

  @ApiProperty({description: '지원(희망)하는 회사'})
  @Prop()
  @IsString()
  company?: string;

  @ApiProperty({description: '지원(희망)하는 직무'})
  @Prop()
  @IsString()
  job?: string;

  @ApiProperty({
    description: '자기소개서 작성자',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'users'
  })
  author: Types.ObjectId

  @ApiProperty({
    description: '첨삭 진행상태',
  })
  @Prop({
    type: String,
    enum: ['ing', 'done'],
    default: 'ing',
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: '전문가 첨삭 내용',
  })
  @Prop({
    type: Types.ObjectId,
    ref: 'comments'
  })
  @IsString()
  comment?: Comment[];
}

export const ExpertSchema = SchemaFactory.createForClass(Expert);
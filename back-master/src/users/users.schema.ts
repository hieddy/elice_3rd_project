import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Document, SchemaOptions } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { Injectable } from "@nestjs/common";
import { Role } from "src/common/enums/role.enum";

const option: SchemaOptions = {
    timestamps : true,
};
@Schema(option)
export class User extends Document{
    @ApiProperty({
        example: '1team@kakao.com',
        description: 'email',
        required: true,
      })
    @Prop({
        required: true,
        unique: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email : string;

    @ApiProperty({
        example: '2004',
        description: 'password',
        required: true,
      })
    @Prop({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    password : string;

    @ApiProperty({
        example: 'Andy',
        description: 'nickname',
        required: true,
      })
    @Prop({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    nickname : string;

    @Prop({
        required : true,
        default : 'user',
    })
    roles : Role[];

    readonly readOnlyData: {
        id: string;
        email: string;
        nickname: string;
      };
    }
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
    return {
      id: this.id,
      email: this.email,
      name: this.nickname,
    };
  });
  
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/User.schema";
import {UserDao} from "./user.dao";
import {AlbumModule} from "../album/album.module";
import { PrismaClient } from '@prisma/client';

@Module({
  imports:[AlbumModule,MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  controllers: [UserController],
  providers: [UserService, UserDao, PrismaClient],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/User.schema";
import {UserDao} from "./user.dao";

@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  controllers: [UserController],
  providers: [UserService, UserDao],
})
export class UserModule {}

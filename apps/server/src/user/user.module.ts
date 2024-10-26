import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';
import { AlbumModule } from '../album/album.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [AlbumModule],
  controllers: [UserController],
  providers: [UserService, UserDao, PrismaClient],
})
export class UserModule {}

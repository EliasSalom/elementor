import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { AlbumDao } from './dao/album.dao';
import { PrismaClient } from '@prisma/client';
import { ImageDao } from './dao/image.dao';

@Module({
  imports: [],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumDao, ImageDao, PrismaClient],
  exports: [AlbumService],
})
export class AlbumModule {}

import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumDao } from './dao/album.dao';
import { Album, AlbumSchema } from './schemas/Album.schema';
import { PrismaClient } from '@prisma/client';
import { ImageDao } from './dao/image.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumDao, ImageDao, PrismaClient],
  exports: [AlbumService],
})
export class AlbumModule {}

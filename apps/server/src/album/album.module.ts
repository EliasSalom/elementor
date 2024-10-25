import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {AlbumDao} from "./album.dao";
import {Album, AlbumSchema} from "./schemas/Album.schema";

@Module({
  imports:[MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumDao],
})
export class AlbumModule {}

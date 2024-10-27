import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createAlbum: CreateAlbumDto) {
    return this.albumService.create(id, createAlbum);
  }

  // @Get()
  // findAll() {
  //   return this.albumService.getAllAlbum();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.getAlbumById(id);
  }

  @Get('all/:id')
  findMany(@Param('id') id: string) {
    return this.albumService.getAllAlbum(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumService.updateAlbum(id, updateAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumService.deleteAlbum(id);
  }
}

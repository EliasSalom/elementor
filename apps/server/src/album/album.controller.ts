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
  createAlbum(@Param('id') id: string, @Body() createAlbum: CreateAlbumDto) {
    return this.albumService.createAlbum(id, createAlbum);
  }

  @Post('/image/:id')
  createImage(@Param('id') id: string, @Body() createImage: { url: string }) {
    return this.albumService.createImage(id, createImage.url);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.getAlbumById(id);
  }

  @Get('all/:id')
  findMany(@Param('id') id: string) {
    return this.albumService.getAllImages(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumService.updateAlbum(id, updateAlbumDto);
  }

  @Delete(':id')
  deleteAlbum(@Param('id') id: string) {
    return this.albumService.deleteAlbum(id);
  }

  @Delete('/image/:id')
  deleteImage(@Param('id') id: string) {
    return this.albumService.deleteImage(id);
  }
}

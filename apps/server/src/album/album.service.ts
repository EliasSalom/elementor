import { Injectable } from '@nestjs/common';
import { AlbumDao } from './dao/album.dao';
import { ImageDao } from './dao/image.dao';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumService {
  constructor(
    private readonly albumDao: AlbumDao,
    private readonly imageDao: ImageDao,
  ) {}
  async create(id: string, data: CreateAlbumDto) {
    const { userId, title, url } = data;
    const albumData = {
      userId,
      title,
    };
    const album = await this.albumDao.createAlbum(id, albumData);
    const image = await this.imageDao.createImage(album.id, url);
    return { album, image };
  }

  getAllAlbum(userId: string) {
    return this.albumDao.getAllAlbums(userId);
  }

  getAlbumById(id: string) {
    return this.albumDao.getAlbumById(id);
  }

  updateAlbum(id: string, updateAlbum) {
    return this.albumDao.updateAlbum(id, updateAlbum);
  }

  deleteAlbum(id: string) {
    return this.albumDao.deleteAlbum(id);
  }
}

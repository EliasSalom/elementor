import { Injectable } from '@nestjs/common';
import { UpdateAlbumDto } from './dto/update-album.dto';
import {AlbumDao} from "./album.dao";

@Injectable()
export class AlbumService {
  constructor(private readonly albumDao: AlbumDao) {
  }
  create(id: string,data) {
    return this.albumDao.createAlbum(id,data);
  }

  // findAll() {
  //   return this.albumDao.;
  // }

  findOne(id: string) {
    return this.albumDao.getAlbumById(id);
  }

  update(id: string, updateAlbumDto) {
    return this.albumDao.updateAlbum(id, updateAlbumDto);
  }

  remove(id: string) {
    return this.albumDao.deleteAlbum(id);
  }
}

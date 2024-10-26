import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserDao} from "./user.dao";
import {AlbumService} from "../album/album.service";
import { CreateUserDto } from './dto/create-user.dto';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao, private readonly albumService: AlbumService) {}
  async create(userData: CreateUserDto) {
    const {albums, name, email} = userData
    const user = await this.userDao.createUser({name, email});
    if(albums) {
      await this.albumService.create(user.id, albums);
    }
  }

  getAllUsers() {
    return this.userDao.getAllUser();
  }

  getUserById(id: string) {
    return this.userDao.getUserById(id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userDao.updateUser(id, updateUserDto);
  }

  deleteUser(id: string) {
    return this.userDao.deleteUser(id);
  }
}

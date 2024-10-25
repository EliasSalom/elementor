import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserDao} from "./user.dao";

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}
  create(createUserDto) {
    return this.userDao.createUser(createUserDto);
  }

  getAllUsers() {
    return this.userDao.getAllUsers();
  }

  getUserById(id: string) {
    return this.userDao.getUserWithAlbums(id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userDao.updateUser(id, updateUserDto);
  }

  deleteUser(id: string) {
    return this.userDao.deleteUser(id);
  }
}

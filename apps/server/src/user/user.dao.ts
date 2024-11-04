import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IUser } from './type/user';

@Injectable()
export class UserDao {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createUser(data: IUser) {
    return this.prismaClient.user.create({
      data: { ...data, deletedAt: null },
    });
  }

  async updateUser(id: string, data: IUser) {
    return this.prismaClient.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string) {
    return this.prismaClient.user.update({
      where: {
        id,
      },
      data: { deletedAt: new Date() },
    });
  }

  async getUserById(id: string) {
    return this.prismaClient.user.findUnique({
      where: { id },
      include: {
        albums: {
          include: {
            images: true,
          },
        },
      },
    });
  }

  async getAllUser() {
    const users = await this.prismaClient.user.findMany({
      take: 20,
      include: { albums: true },
    });
    return users
      .filter((user) => !user.deletedAt)
      .map((user) => ({
        ...user,
        albums: user.albums?.filter((album) => album.deletedAt === null) || [],
      }));
  }
}

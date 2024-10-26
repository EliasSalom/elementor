import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserDao {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createUser(data) {
    return this.prismaClient.user.create({ data });
  }

  async updateUser(id: string, data) {
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
          include: { images: true },
        },
      },
    });
  }

  async getAllUser() {
    return this.prismaClient.user.findMany({
      take: 20,
      include: { albums: true },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AlbumDao {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createAlbum(id: string, title: string) {
    const data = {
      userId: id,
      title,
    };
    return this.prismaClient.album.create({ data });
  }

  async updateAlbum(id: string, data) {
    return this.prismaClient.album.update({
      where: { id },
      data,
    });
  }

  async deleteAlbum(id: string) {
    return this.prismaClient.album.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async getAlbumById(id: string) {
    return this.prismaClient.album.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  async getAllAlbums(userID: string) {
    return this.prismaClient.album.findMany({
      where: {
        userId: userID,
      },
      take: 20,
    });
  }
}

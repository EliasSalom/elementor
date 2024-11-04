import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ImageDao {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createImage(id: string, url: string) {
    return this.prismaClient.image.create({
      data: {
        albumId: id,
        url,
      },
    });
  }

  async getImageById(id: string) {
    return this.prismaClient.image.findUnique({
      where: { id },
    });
  }

  deleteImage(id: string) {
    return this.prismaClient.image.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async getAllImages(albumId: string) {
    const images = await this.prismaClient.image.findMany({
      where: { albumId },
    });
    return images.filter((image) => image.deletedAt === null);
  }
}

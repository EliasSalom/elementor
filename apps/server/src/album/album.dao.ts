import {InjectModel} from "@nestjs/mongoose";
import {Injectable, NotFoundException} from "@nestjs/common";
import {Album} from "./schemas/Album.schema";
import {Model, Types} from "mongoose";
import {Image} from "./schemas/Image.schema";

@Injectable()
export class AlbumDao {
    constructor(@InjectModel(Album.name) private albumModel: Model<Album>) {}

    async createAlbum(userId: string, title: string): Promise<Album> {
        const newAlbum = new this.albumModel({
            title,
            userId: new Types.ObjectId(userId),
            images: [],
        });
        return newAlbum.save();
    }

    async addImageToAlbum(albumId: string, imageUrl: string, isCover: boolean = false) {
        return this.albumModel.findByIdAndUpdate(
            albumId,
            { $push: { images: { url: imageUrl, isCover } } },
            { new: true },
        );
    }

    async getAlbumById(albumId: string): Promise<Album> {
        const album = await this.albumModel.findById(albumId).exec();
        if (!album) {
            throw new NotFoundException(`Album with ID ${albumId} not found`);
        }
        return album;
    }

    async updateAlbum(albumId: string, updateData: Partial<Album>): Promise<Album> {
        const updatedAlbum = await this.albumModel
            .findByIdAndUpdate(albumId, updateData, { new: true })
            .exec();

        if (!updatedAlbum) {
            throw new NotFoundException(`Album with ID ${albumId} not found`);
        }

        return updatedAlbum;
    }

    // Delete album by ID
    async deleteAlbum(albumId: string): Promise<void> {
        const result = await this.albumModel.findByIdAndDelete(albumId).exec();
        if (!result) {
            throw new NotFoundException(`Album with ID ${albumId} not found`);
        }
    }

    async updateImage(albumId: string, imageId: string, updateData: Partial<Image>): Promise<Album> {
        const album = await this.albumModel.findById(albumId).exec();
        if (!album) {
            throw new NotFoundException(`Album with ID ${albumId} not found`);
        }

        return album.save();
    }

    async deleteImage(albumId: string, imageId: string): Promise<Album> {
        const album = await this.albumModel.findById(albumId).exec();
        if (!album) {
            throw new NotFoundException(`Album with ID ${albumId} not found`);
        }

        return album.save();
    }
}
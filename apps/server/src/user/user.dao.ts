import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./schemas/User.schema";
import {Model} from "mongoose";

@Injectable()
export class UserDao {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(data: User): Promise<User> {
        return new this.userModel(data).save();
    }

    async getUserWithAlbums(userId: string): Promise<User> {
        return this.userModel.findById(userId).populate('albums').exec();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find({ deletedAt: null }).exec();
    }

    async updateUser(userId: string, updateData: Partial<User>): Promise<User> {
        return await this.userModel
            .findByIdAndUpdate(userId, updateData, {new: true})
            .exec();
    }

    async deleteUser(userId: string) {
        return await this.userModel.findByIdAndUpdate(userId, {deletedAt:new Date()},{new: true}).exec();
    }
}
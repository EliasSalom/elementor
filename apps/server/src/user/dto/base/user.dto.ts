import { IsEmail, IsString, IsOptional, } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAlbumDto } from '../../../album/dto/create-album.dto';

export class UserDto {
    @IsOptional()
    id?: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @Type(() => CreateAlbumDto)
    albums: CreateAlbumDto

    @IsOptional()
    createdAt: Date;

    @IsOptional()
    deletedAt: Date;

    @IsOptional()
    updatedAt: Date;
}
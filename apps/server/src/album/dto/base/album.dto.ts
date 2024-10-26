import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ImageDto } from './image.dto';

export class AlbumDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: Array<ImageDto>;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  deletedAt?: Date;
}

export class CreateAlbumDto {
  @IsString()
  title: string;
}

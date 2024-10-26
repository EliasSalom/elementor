import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ImageDto {
  @IsOptional()
  @IsString()
  albumId?: string;

  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  url: string;

  @IsBoolean()
  isCover: boolean;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  deletedAt?: Date;
}
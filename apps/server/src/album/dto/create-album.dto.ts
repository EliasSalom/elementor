import { OmitType } from '@nestjs/mapped-types';
import { AlbumDto } from './base/album.dto';
import { IsString } from 'class-validator';

export class CreateAlbumDto extends OmitType(AlbumDto, [
  'createdAt',
  'updatedAt',
  'deletedAt',
  'images',
]) {
  @IsString()
  url: string;
}

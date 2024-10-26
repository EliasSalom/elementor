import { OmitType } from '@nestjs/mapped-types';
import { AlbumDto } from './base/album.dto';


export class UpdateAlbumDto extends OmitType(AlbumDto,["createdAt","updatedAt","deletedAt"]){}

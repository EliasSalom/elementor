import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from './base/user.dto';

export class UpdateUserDto extends OmitType(UserDto,["albums","updatedAt","createdAt","deletedAt"]) {}

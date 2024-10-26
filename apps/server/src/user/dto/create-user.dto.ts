import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from './base/user.dto';

export class CreateUserDto extends OmitType(UserDto, ["id","createdAt","updatedAt","deletedAt"]) {}

import {IsDate, IsEmail, IsString, IsUUID} from "class-validator";

export class UserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;
}
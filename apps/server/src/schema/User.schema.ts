import {Prop} from "@nestjs/mongoose";

export class User {
    @Prop()
    email: string;


}
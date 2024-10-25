// src/user/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {v4 as uuid} from "uuid";

@Schema()
export class User extends Document {
    @Prop({ default: () => uuid(), unique: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Album' }], default: [] })
    albums: Types.Array<Types.ObjectId>;

    @Prop({ type: Date, default: () => new Date() })
    createdAt: Date;

    @Prop({ type: Date, default: null })
    updatedAt: Date;

    @Prop({ type: Date, default: null })
    deletedAt: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
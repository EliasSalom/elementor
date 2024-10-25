// src/user/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Album' }], default: [] })
    albums: Types.Array<Types.ObjectId>;
}

export const UserSchema = SchemaFactory.createForClass(User);
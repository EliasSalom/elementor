// src/user/schemas/album.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Image, ImageSchema } from './image.schema';

@Schema()
export class Album extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ type: [ImageSchema], default: [] })
    images: Types.Array<Image>;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
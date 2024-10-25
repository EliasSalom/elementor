// src/user/schemas/album.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Image, ImageSchema } from './image.schema';
import { v4 as uuid } from 'uuid';
@Schema()
export class Album extends Document {
    @Prop({ default: () => uuid(), unique: true })
    id: string;

    @Prop({ required: true })
    title: string;

    @Prop({ type: [ImageSchema], default: [] })
    images: Types.Array<Image>;

    @Prop({ type: Date, default: () => new Date() })
    createdAt: Date;

    @Prop({ type: Date, default: null })
    updatedAt: Date;

    @Prop({ type: Date, default: null })
    deletedAt: Date | null;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
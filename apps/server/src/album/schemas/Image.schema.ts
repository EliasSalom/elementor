import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {v4 as uuid} from "uuid";

@Schema()
export class Image extends Document {

    @Prop({ required: true, default: () => uuid(), unique: true })
    id: string;

    @Prop({ required: true })
    url: string;

    @Prop({ default: false })
    isCover: boolean;

    @Prop({ type: Date, default: () => new Date() })
    createdAt: Date;

    @Prop({ type: Date, default: null })
    updatedAt: Date;

    @Prop({ type: Date, default: null })
    deletedAt: Date | null;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
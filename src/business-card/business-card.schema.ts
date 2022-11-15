import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessCardDocument = BusinessCard & Document;

@Schema()
export class BusinessCard {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  email: string;

  @Prop()
  about: string;

  @Prop()
  interests: string;
}

export const BusinessCardSchema = SchemaFactory.createForClass(BusinessCard);

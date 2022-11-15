import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessCard, BusinessCardDocument } from './business-card.schema';

@Injectable()
export class BusinessCardService {
  constructor(
    @InjectModel(BusinessCard.name)
    private businessCardModel: Model<BusinessCardDocument>,
  ) {}

  getBusinessCards(): Promise<BusinessCard[]> {
    return this.businessCardModel.find().exec();
  }

  createBusinessCard(businessCard: BusinessCard) {
    const newBusinessCard = new this.businessCardModel();
    return newBusinessCard.save();
  }

  updateBusinessCard(id: string, businessCard: any) {
    //connect to db and update
  }

  deleteBusinessCard(id: string) {
    // delete bc
  }

  deleteMany(deleteCriteria: any) {
    return this.businessCardModel.deleteMany(deleteCriteria);
  }
}

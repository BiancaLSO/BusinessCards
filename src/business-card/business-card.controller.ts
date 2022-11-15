import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BusinessCardService } from './business-card.service';
import { Request } from 'express';
import { BusinessCard } from './business-card.schema';
import { BusinessCardDto } from './business-card.dto';
import { TestGuard } from 'src/authentication/test.guard';

@Controller('businesscards')
export class BusinessCardController {
  constructor(private readonly businessCardService: BusinessCardService) {}

  @UseGuards(TestGuard)
  @Get()
  getBusinessCards(@Req() request: Request): Promise<BusinessCard[]> {
    console.log(request);
    return this.businessCardService.getBusinessCards();
  }

  @Post()
  createBusinessCard(@Body() businessCardDto: BusinessCardDto) {
    return this.businessCardService.createBusinessCard(businessCardDto);
  }

  @Delete(':id')
  deleteBusinessCard(@Param('id') id: string) {
    console.log(id);
  }
}

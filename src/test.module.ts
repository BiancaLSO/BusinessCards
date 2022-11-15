import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { BusinessCardModule } from './business-card/business-card.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/businesscards-test'),
    BusinessCardModule,
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TestModule {}

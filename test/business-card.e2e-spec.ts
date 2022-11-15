import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TestModule } from './../src/test.module';
import { BusinessCardDto } from './../src/business-card/business-card.dto';
import { BusinessCardService } from './../src/business-card/business-card.service';

describe('BusinessCardController (e2e)', () => {
  let app: INestApplication;
  let businessCardService: BusinessCardService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule, AppModule],
    }).compile();

    businessCardService = moduleFixture.get(BusinessCardService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    await businessCardService.deleteMany({}); // delete all businesscards.
  });

  describe('Post Business Card Controller', () => {
    it('should create a new business card', async () => {
      // Arrange
      const bc = new BusinessCardDto(
        'Jennie',
        'jennie@gmail.com',
        'Frontened developer',
        'cooking',
      );

      // Act
      const response = await request(app.getHttpServer())
        .post('/businesscards')
        .send(bc)
        .expect(201);

      // Asset
      const res = response.body;
      expect(res._id).toBeDefined();
      expect(res.__v).toEqual(0);
    });
  });

  describe('Get Business Card controller', () => {
    it('should get all business cards', async () => {
      // Arrange
      const bc1 = new BusinessCardDto(
        'Lila',
        'lila@yahoo.dk',
        'Backend developer',
        'biking',
      );
      const bc2 = new BusinessCardDto(
        'Mavis',
        'mavis@gmail.dk',
        'Cyber security',
        'painting',
      );
      await businessCardService.createBusinessCard(bc1);
      await businessCardService.createBusinessCard(bc2);

      //Act
      const response = await request(app.getHttpServer())
        .post('/businesscards')
        .send(bc1)
        .send(bc2)
        .expect(201);

      //Assert (expect)
      const res = response.body;
      expect(res._id).toBeDefined();
      expect(res.__v).toEqual(0);
    });
  });

  afterAll(() => {
    app.close();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';

describe('AppController', () => {
  let appController: AppController;

  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService)
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('test fortune', () => {
    it('Validate type of return is a number', () => {
      expect(typeof appController.getFortune()).toBe('number');
    });

    it('Validate size of fortune number is equals to 4 digits', () => {
      expect(appController.getFortune().toString.length).toBe(4);
    });

    it('Validate size of fortune number is equals or less to 4 digits', () => {
      expect(appController.getFortune().toString.length).toBeLessThanOrEqual(4);
    });

    it('Validate random', () => {
      const v1: number = appController.getFortune();
      const v2: number = appController.getFortune();
      expect(v1).not.toEqual(v2);
    });
  });


  describe('Test fortune String', () => {
    it('Validate type of return is a string', () => {
      jest.spyOn(appService, 'getFortune').mockReturnValue(1122);
      expect(typeof appController.getFortuneStr()).toBe('string');
    });
  });

  

});

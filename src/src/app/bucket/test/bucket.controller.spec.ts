import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../database/db.module';
import { BucketController } from '../bucket.controller';
import { BucketService } from '../bucket.service';
import * as mocks from 'node-mocks-http';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Bucket } from '../model/bucket.entity';
import { HttpStatus } from '@nestjs/common';

describe('BucketController', () => {
  let controller: BucketController;
  let bucketService: BucketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BucketController],
      providers: [
        {
          provide: BucketService,
          useValue: {
            create: (data) => jest.fn().mockResolvedValue(data),
            list: () => jest.fn().mockResolvedValue(true),
          },
        },
        {
          provide: getRepositoryToken(Bucket),
          useValue: {
            find: () => jest.fn().mockResolvedValue(null),
            create: () => jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();

    bucketService = module.get<BucketService>(BucketService);
    controller = module.get<BucketController>(BucketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create entity', () => {
    it('Should throw error in validation, not found body "data"', async () => {
      const req = mocks.createRequest({
          method: 'POST',
          url: 'bucket/create',
          body: {
            data: null,
          },
        }),
        res = mocks.createResponse();
      expect(await controller.create(req, res)).toMatchObject({
        statusCode: HttpStatus.BAD_REQUEST,
      });
    });
    it('Should create bucket', async () => {
      const req = mocks.createRequest({
          method: 'POST',
          url: 'bucket/create',
          body: {
            data: 'teste set data',
          },
        }),
        res = mocks.createResponse();
      const bucket = 'ncdsa9012319203213dsad',
        dataMock = {
          id: 1,
          bucket,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
        };
      const mockService = jest
        .spyOn(bucketService, 'create')
        .mockResolvedValue(dataMock);

      expect(await mockService).toBeCalledWith('teste set data');
      expect(await controller.create(req, res)).toMatchObject({
        statusCode: HttpStatus.CREATED,
        data: dataMock,
      });
    });
  });
});

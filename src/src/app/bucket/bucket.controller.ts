import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BucketService } from './bucket.service';

@Controller('bucket')
export class BucketController {
  public constructor(private bucketService: BucketService) {}

  @Get('create')
  public async create(@Res() res: Response) {
    try {
      return res.status(HttpStatus.ACCEPTED).json({
        success: true,
        data: await this.bucketService.create('teste'),
      });
    } catch (Error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        msg: Error,
      });
    }
  }

  @Get('list')
  public async list(@Res() res: Response) {
    return res.status(HttpStatus.ACCEPTED).json({
      data: await this.bucketService.list(),
    });
  }
}

import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BucketService } from './bucket.service';

@Controller('bucket')
export class BucketController {
  public constructor(private bucketService: BucketService) {}

  @Get('create')
  public create(@Res() res: Response) {
    this.bucketService.create();
    return res.status(HttpStatus.ACCEPTED).json({
      success: true,
    });
  }

  @Get('list')
  public async list(@Res() res: Response) {
    return res.status(HttpStatus.ACCEPTED).json({
      data: await this.bucketService.list(),
    });
  }
}

import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { BucketService } from './bucket.service';
import {
  BuckerMessageErros,
  BuckerMessageErrosEnum,
  BucketErrors,
} from './model/errors';

@Controller('bucket')
export class BucketController {
  public constructor(private bucketService: BucketService) {}

  getError(type: BuckerMessageErrosEnum): BucketErrors {
    return BuckerMessageErros[type];
  }

  @Post('create')
  public async create(@Req() req: Request, @Res() res: Response) {
    try {
      let { data } = req.body;
      if (!data) {
        const { code, message } = this.getError(
          BuckerMessageErrosEnum.E_VALIDATE_FAILURE,
        );
        return res.status(HttpStatus.BAD_REQUEST).json({
          code,
          message,
          statusCode: HttpStatus.BAD_REQUEST,
        });
      }
      if (data instanceof Object) {
        data = JSON.stringify(data);
      }
      return res.status(HttpStatus.CREATED).json({
        success: true,
        data: await this.bucketService.create(data),
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

  @Get('encrypts/:id')
  public async find(
    @Param('id', new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    if (!id || id <= 0) {
      const { code, message } = this.getError(
        BuckerMessageErrosEnum.E_LIST_FAILURE,
      );
      return res.status(HttpStatus.BAD_REQUEST).json({
        code,
        message,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }
    return res.status(HttpStatus.ACCEPTED).json({
      data: await this.bucketService.list(id),
    });
  }
}

import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { BucketService } from './bucket.service';

enum BuckerMessageErrosEnum {
  E_VALIDATE_FAILURE = 'data_validation_error',
  INTERNAL_SERVER_ERROR = 'internal_error',
}

const BuckerMessageErros = {
  [BuckerMessageErrosEnum.E_VALIDATE_FAILURE]: {
    message: "O campo 'data' obrigatório",
    code: 'E_VALIDATE_FAILURE',
  },
  [BuckerMessageErrosEnum.INTERNAL_SERVER_ERROR]: {
    message: 'Erro interno, tente novamente mais tarde',
    code: 'INTERNAL_SERVER_ERROR',
  },
};

@Controller('bucket')
export class BucketController {
  public constructor(private bucketService: BucketService) {}

  getError(type: BuckerMessageErrosEnum) {
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
      return res.status(HttpStatus.ACCEPTED).json({
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
}

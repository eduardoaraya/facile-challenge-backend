import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptService } from '../crypt/crypt.service';
import { Bucket } from './model/bucket.entity';

@Injectable()
export class BucketService {
  public constructor(
    @InjectRepository(Bucket)
    private contactRepository: Repository<Bucket>,
    private cryptorService: CryptService,
  ) {}

  public async create(data: string) {
    return await this.contactRepository.save({
      bucket: await this.cryptorService.encrypt(data),
    });
  }

  public async list(): Promise<Bucket[]> {
    return Promise.all(
      (await this.contactRepository.find()).map(async (value: any) => ({
        ...value,
        bucket: await this.cryptorService.decrypt(value.bucket),
      })),
    );
  }
}

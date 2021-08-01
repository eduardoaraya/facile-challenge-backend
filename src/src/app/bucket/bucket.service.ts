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

  public async create() {
    return await this.contactRepository.save({
      bucket: this.cryptorService.encrypt(`djsoadjsaoijdois`),
    });
  }

  public async list() {
    return this.contactRepository.find();
  }
}

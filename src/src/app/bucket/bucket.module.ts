import { Module } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { BucketController } from './bucket.controller';
import { CryptService } from '../crypt/crypt.service';
import { BucketRepository } from './model/bucket.repository';
import { DatabaseModule } from '../database/db.module';
@Module({
  imports: [DatabaseModule],
  controllers: [BucketController],
  providers: [BucketRepository, BucketService, CryptService],
})
export class BucketModule {}

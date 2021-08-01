import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BucketService } from './bucket.service';
import { Bucket } from './model/bucket.entity';
import { BucketController } from './bucket.controller';
import { CryptService } from '../crypt/crypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bucket])],
  controllers: [BucketController],
  providers: [BucketService, CryptService],
})
export class BucketModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BucketModule } from './bucket/bucket.module';
import { Bucket } from './bucket/model/bucket.entity';
import { CryptService } from './crypt/crypt.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [Bucket],
      synchronize: true,
    }),
    BucketModule,
  ],
  controllers: [],
  providers: [CryptService],
  exports: [CryptService],
})
export class AppModule {}

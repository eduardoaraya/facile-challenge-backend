import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BucketModule } from './bucket/bucket.module';
import { CryptService } from './crypt/crypt.service';
import { DatabaseModule } from './database/db.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    BucketModule,
  ],
  controllers: [],
  providers: [CryptService],
  exports: [CryptService],
})
export class AppModule {}

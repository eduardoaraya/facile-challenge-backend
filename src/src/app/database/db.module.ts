import { Module } from '@nestjs/common';
import { DbConnection } from './db.connection';

@Module({
  providers: [...DbConnection],
  exports: [...DbConnection],
})
export class DatabaseModule {}

import { Connection } from 'typeorm';
import { DbConnectionProviderName } from '../../database/db.connection';
import { Bucket } from './bucket.entity';

export const BucketRepositoryName = 'BUCKET_REPOSITORY';

export const BucketRepository = {
  provide: BucketRepositoryName,
  useFactory: (connection: Connection) => connection.getRepository(Bucket),
  inject: [DbConnectionProviderName],
};

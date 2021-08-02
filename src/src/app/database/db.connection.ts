import { createConnection } from 'typeorm';
import dbConfig from './db.config';

export const DbConnectionProviderName = 'DATABASE_CONNECTION';

export const DbConnection = [
  {
    provide: DbConnectionProviderName,
    useFactory: async () => await createConnection(dbConfig),
  },
];

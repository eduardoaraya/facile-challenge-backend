import * as dotenv from 'dotenv';
import * as path from 'path';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

declare const process;

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '..', '.env'),
});

export default {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.faciledb,
  entities: [path.join(__dirname, '..', '**', 'model', '*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, 'migration', '*.ts')],
  synchronize: true,
} as ConnectionOptions;

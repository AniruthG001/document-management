import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'process'; 
export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'default_username',
  password: process.env.DB_PASSWORD || 'default_password',
  database: process.env.DB_NAME || 'default_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
});

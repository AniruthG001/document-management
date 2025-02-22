import { DataSource } from 'typeorm';
import { Role } from './role/role.entity';  // Import your entities
import * as process from 'process'; 
import * as dotenv from 'dotenv';

// Ensure that dotenv is loaded to read the .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10),
  migrations: [__dirname + '/migrations/*.ts'],
  username: process.env.DB_USERNAME || 'default_username',
  password: process.env.DB_PASSWORD || 'default_password',
  database: process.env.DB_NAME || 'default_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
});
 

 
import { DataSource } from 'typeorm';
import { Role } from './role/role.entity';  // Import your entities

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'documentdb',
  entities: [Role], 
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
});


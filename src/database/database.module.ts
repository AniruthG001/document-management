import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig, // Use the global config function to set up the connection
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

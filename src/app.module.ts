import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1', // or 'localhost'
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Your PostgreSQL username
      password: 'postgres', // Your PostgreSQL password
      database: 'documentdb', // Your database name
      entities: [], // Add your entity classes here
      synchronize: true, // Set to true for auto-sync (development only)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

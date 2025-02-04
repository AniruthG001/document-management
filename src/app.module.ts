import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Role } from './role/role.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    Role
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

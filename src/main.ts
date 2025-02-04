import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger options
  const options = new DocumentBuilder()
    .setTitle('My API') // Set the title of your API
    .setDescription('The API description') // Set a short description
    .setVersion('1.0') // Set the version
    .addTag('document management') // Add tags for your endpoints (optional)
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Serve Swagger UI at /api-docs
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}

bootstrap();

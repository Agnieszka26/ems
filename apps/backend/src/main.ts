/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import ApiGuard from './app/guards/api-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //usuwanie wszystkich nadmiarowych
      forbidNonWhitelisted: true, // to niekoniecznie w prod, bo to jest sensitive na ataki bo się podopowiada hakerowi co jest nadmiarowe ale na dev jak najbardziej
      transform: true, // zamienia na istancje otypowanych danych przez classe, rzutuje typy
    })
  );
  app.useGlobalGuards(new ApiGuard());
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/${process.env.API_VERSION}`);
  await app.listen(3000);
}
bootstrap();

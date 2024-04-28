import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(5000);
    console.log('Server is started at port 5000.');
  } catch (error) {
    console.log(error);
  }
}

bootstrap();

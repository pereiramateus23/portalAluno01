import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() { // ponto de entrada da aplicação
  const app = await NestFactory.create(AppModule); //cria aplicação NestJS

  // await app.listen(process.env.PORT ?? 3000);


  // ativando validação global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true,  
      forbidNonWhitelisted: true,  
      transform: true, 
    }),
  );

  await app.listen(3000);
}
bootstrap(); 

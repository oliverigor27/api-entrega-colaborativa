import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API Entrega Colaborativa')
    .setDescription('A API de Entrega Colaborativa permite que indivíduos e empresas conectem-se e compartilhem recursos para facilitar a entrega de produtos e serviços.')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document)
  
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Consort Group')
    .setDescription('Product Services')
    .setVersion('1.0')
    .addTag('Product Services')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('services', app, document);

  await app.listen(3001);
}
bootstrap();

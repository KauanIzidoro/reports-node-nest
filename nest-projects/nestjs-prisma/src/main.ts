import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger init
  const config = new DocumentBuilder()
  .setTitle('Web App Backend')
  .setDescription('Serviço Web para orquestar a aplicação desktop e o DashBoard Web')
  .setVersion('1.0.0')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  console.log('http://localhost:3000/api');
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
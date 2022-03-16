import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.use(
     session({
       secret: 'cat',
       resave: false,
       saveUninitialized: false,
       cookie:{maxAge: 3600000}
     })
   );

    app.use(passport.initialize());
    app.use(passport.session());

  const config = new DocumentBuilder()
    .setTitle('mBaling')
    .setDescription('mBaling API')
    .setVersion('1.0')
    .addTag('mBaling')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

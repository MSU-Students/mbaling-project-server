import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentUserModule } from './student-users/student-user.module';
import { AuthModule } from './auth/auth.module';
import { PostformModule } from './postform/postform.module';
import entities from './typeorm';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mbaling_db',
      entities: entities,
      synchronize: true,
    }),
  StudentUserModule,
  AuthModule,
  PostformModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mbaling_db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}

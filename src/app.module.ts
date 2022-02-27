import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student/service/student.service';
import { StudentController } from './student/controller/student.controller';
import { CreateStudentDto } from './student/entities/CreateStudent.dto';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mbaling_db',
      entities: [CreateStudentDto],
      synchronize: true,
    }),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudentsController } from './controller/students/students.controller';
import { StudentsService } from './services/students/students.service';
import { StudentUser } from 'src/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([StudentUser])
  ],
  controllers: [StudentsController],
  providers: [{
    provide: 'STUDENT_SERVICE',
    useClass: StudentsService
  }]
})
export class StudentUserModule {}

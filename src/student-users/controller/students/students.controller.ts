import { StudentsService } from 'src/student-users/services/students/students.service';

import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentDto } from 'src/student-users/dto/CreateStudent.dto';

@Controller('students')
export class StudentsController {

    constructor(@Inject('STUDENT_SERVICE') private readonly studentService: StudentsService)
    {}

    @Get()
    getStudents(){
        return this.studentService.getStudents();
    }

    @Post('create')
        @UsePipes(ValidationPipe)
    createStudent(@Body() createStudentDto: CreateStudentDto){
        return this.studentService.createStudent(createStudentDto)
    }
}

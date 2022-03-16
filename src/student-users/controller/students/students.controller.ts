import { StudentsService } from 'src/student-users/services/students/students.service';

import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentDto } from 'src/student-users/dto/CreateStudent.dto';
import { StudentUser } from 'src/typeorm';

@Controller('students')
export class StudentsController {

    constructor(@Inject('STUDENT_SERVICE') private readonly studentService: StudentsService)
    { }

    @Get()
    getStudents(){
        return this.studentService.getStudents();
    }

    @Post('create')
        @UsePipes(ValidationPipe)
    createStudent(@Body() createStudentDto: CreateStudentDto){
        return this.studentService.createStudent(createStudentDto)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() editUser: StudentUser) {
    return this.studentService.update(id, editUser);
  }

    @Delete(':id')
    async delete(@Param('id') id: number) {
      return this.studentService.deleteOne(id);
    }
}

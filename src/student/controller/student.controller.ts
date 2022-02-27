import { StudentService } from '../service/student.service'; 
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from '../entities/CreateStudent.dto';

@Controller('student')
export class StudentController {

    constructor(private studentService: StudentService) {
        
    }

    @Get('')
    getAllCustomers(){
        return this.studentService.getStudents();
    }

    @Post('create')
    createCustomer(@Body() createStudentDto: CreateStudentDto){
        console.log(createStudentDto);
        this.studentService.createStudent(createStudentDto)
    }

}

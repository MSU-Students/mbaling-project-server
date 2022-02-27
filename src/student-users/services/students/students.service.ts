import { InjectRepository } from '@nestjs/typeorm';
import { SerializeStudentUser } from './../../types/index';
import { StudentUser } from '../../types';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateStudentDto } from 'src/student-users/dto/CreateStudent.dto';
import { StudentUser as StudentEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    
    constructor(@InjectRepository(StudentEntity) private readonly studentRepository: Repository<StudentEntity> ){
 
    }
    private studentusers: StudentUser[] = [
     {
        username: 'StudentUsername',
        password: 'StudentPassword',
        email: 'StudentEmail@gmail.com',
        firstname: 'FirstStudent',
        lastname: 'LastStudent',
        middlename: 'MiddleStudent', 
        birthdate: '01/01/2010'
    },
    {
        username: 'StudentUsername02',
        password: 'StudentPassword02',
        email: 'StudentEmail@gmail.com',
        firstname: 'FirstStudent02',
        lastname: 'LastStudent02',
        middlename: 'MiddleStudent02',
        birthdate: '01/01/2010'
    },
];

    getStudents(){
        return this.studentusers.map((user) => plainToClass(SerializeStudentUser,user));
    }

    getStudentByUsername(username: string){
        return this.studentusers.find((user) => user.username === username);
    }

    createStudent(createStudentDto: CreateStudentDto){
       const newStudent = this.studentRepository.create(createStudentDto);
       return this.studentRepository.save(newStudent)
    }
}

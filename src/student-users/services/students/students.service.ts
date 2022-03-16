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
    private studentusers: StudentUser[] = [];

    async getStudents(){
        return this.studentRepository.find();
    }

    async getStudentByUsername(username: string){
        return this.studentusers.find((user) => user.username === username);
    }

    async createStudent(createStudentDto: CreateStudentDto){
       const newStudent = this.studentRepository.create(createStudentDto);
       return this.studentRepository.save(newStudent)
    }

    async findStudentByUsername(username: string){
        return this.studentRepository.findOne({username})
    }

    async update(id: number, editStudent: StudentEntity) {
        return this.studentRepository.update(id, editStudent);
      }

    async deleteOne(id: number) {
        return this.studentRepository.delete(id);
      }
}

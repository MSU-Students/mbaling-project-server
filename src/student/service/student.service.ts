import { CreateStudentDto } from './../entities/CreateStudent.dto';
import { Injectable } from '@nestjs/common';
import { Student } from '../interfaces/student.interface'; 

@Injectable()
export class StudentService {

    private students: Student[] = [
        {
            username: "@Student01",
            email: "student01@gmail.com",
            password: "password",
            fisrtname: "Fstudent",
            middlename: "S",
            lastname: "Lstudent",
            birthdate: "01/20/3030",
        },
        {
            username: "@Student02",
            email: "student02@gmail.com",
            password: "password",
            fisrtname: "Fstudent02",
            middlename: "S02",
            lastname: "Lstudent02",
            birthdate: "01/20/3030",
        },
    ];

    // findStudnetById(id: number){
    //     return this.students.find((user) => user.id === id);
    // }
    
    createStudent(studentDto: CreateStudentDto){
        this.students.push(studentDto)
    }
    
    getStudents(){
        return this.students;
    }
}

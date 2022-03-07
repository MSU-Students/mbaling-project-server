import { StudentsService } from 'src/student-users/services/students/students.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(@Inject('STUDENT_SERVICE') private readonly studentService: StudentsService){

    }

    async validateUser(username: string, password: string){
        const userDB = await this.studentService.findStudentByUsername(username);
        if(userDB && userDB.password == password){
            console.log('User is Valid')
            return userDB;
        }
        console.log('User Invalid')
        return null;
    }
}

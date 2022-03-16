import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateStudentDto implements CreateStudentDto {

    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    
    @IsNotEmpty()
    @IsEmail()
    email: string; 
    
    @IsNotEmpty()
    firstname: string;
    
    @IsNotEmpty()
    lastname: string;
    
    @IsNotEmpty()
    middlename: string;
    
    @IsNotEmpty()
    birthdate: string;

    @IsNotEmpty()
    degree: string;

    @IsNotEmpty()
    department: string;

    @IsNotEmpty()
    college: string;
 }
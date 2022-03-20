import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateStudentDto implements CreateStudentDto {

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    @IsEmail()
    email: string; 
  
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    firstname: string;
    
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    lastname: string;
    
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    middlename: string;
    
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    birthdate: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    degree: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    department: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    college: string;
 }
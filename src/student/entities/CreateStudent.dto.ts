import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Student } from '../interfaces/student.interface'; 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class CreateStudentDto implements Student {

  @PrimaryGeneratedColumn({
    type:'bigint',
    name: 'student_id'
  })
  studentId?: number;

  @IsNotEmpty()
  @ApiProperty({ 
    default: 'username02' })
  @Column({length : 30})
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ 
    default: 'testing@gmail.com' })
  @Column({length : 50})
  email: string;

  @IsNotEmpty()
  @ApiProperty({ 
    default: 'password' })
  @Column({length : 30})
  password: string;

  @IsNotEmpty()
  @Column({length : 30})
  @ApiProperty({ 
    default: 'ABDULWALIE' })
  fisrtname: string;

  @IsNotEmpty()
  @Column({length : 30})
  @ApiProperty({ 
    default: 'G' })
  middlename: string;

  @IsNotEmpty()
  @Column({length : 30})
  @ApiProperty({ 
    default: 'Bashier' })
  lastname: string;

  @IsNotEmpty()
  @Column({length : 30})
  @ApiProperty({ 
    default: '01/02/3030' })
  birthdate: string;

  // @PrimaryGeneratedColumn({
  //   type:'bigint',
  //   name: 'student_id'
  // })
  // studentId?: number;

  // @IsNotEmpty()
  // @ApiProperty({ 
  //   default: 'ABDULWALIE' })
  // @Column({ length: 30 })
  // firstname: string;


  // @IsNotEmpty()
  // @ApiProperty({ 
  //   default: 'Bashier' })
  // @Column({ length: 30 })
  // lastname: string;


  // @IsNotEmpty()
  // @ApiProperty({ 
  //   default: 'G' })
  // @Column({ length: 30 })
  // middlename: string;

  // @IsNotEmpty()
  // @ApiProperty({ 
  //   default: 'Male' })
  // @Column({ length: 30 })
  // gender: string;

  // @IsNotEmpty()
  // @ApiProperty({ 
  //   default: '08/31/1999' })
  // @Column({length: 30})
  // birthdate: string;

  // @IsNotEmpty()
  // @ApiProperty({ default: '09123456789' })
  // @Column()
  // mobilenumber: number;

  // @IsNotEmpty()
  // @ApiProperty({ default: 'bashier@gmail.com' })
  // @Column({length: 30})
  // emailaddress: string;
}

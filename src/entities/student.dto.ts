import { ApiProperty } from '@nestjs/swagger';
import { Student } from 'src/interfaces/student.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class StudentDto implements Student {
  @PrimaryGeneratedColumn('uuid')
  studentId?: number;

  @ApiProperty({ default: 'ABDULWALIE' })
  @Column({ length: 30 })
  firstname: string;

  @ApiProperty({ default: 'Bashier' })
  @Column({ length: 30 })
  lastname: string;

  @ApiProperty({ default: 'G' })
  @Column({ length: 30 })
  middlename: string;

  @ApiProperty({ default: 'Male' })
  @Column({ length: 30 })
  gender: string;

  @ApiProperty({ default: '08/31/1999' })
  @Column({length: 30})
  birthdate: string;

  @ApiProperty({ default: 'Filipino' })
  @Column({length: 30})
  ethnicity: string;

  @ApiProperty({ default: 'BS' })
  @Column({length: 30})
  degree: string;

  @ApiProperty({ default: 'Information' })
  @Column({length: 30})
  department: string;

  @ApiProperty({ default: 'Bashier' })
  @Column({length: 30})
  college: string;

  @ApiProperty({ default: 'Bashier' })
  @Column({length: 30})
  academicstatus: string;

  @ApiProperty({ default: 'Bashier' })
  @Column({length: 30})
  homeaddress: string;

  @ApiProperty({ default: 'Bashier' })
  @Column()
  mobilenumber: number;

  @ApiProperty({ default: 'Bashier' })
  @Column({length: 30})
  emailaddress: string;
}

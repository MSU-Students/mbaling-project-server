import { ChatDto } from './../chat/chat.entity';
import { PostDto } from './../entities/post.entity';
import { HousingDto } from './../housing-unit/housing.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/interfaces/users.interfaces'; 
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('user')
export class UserDto implements Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'student_id'
  })
  id?: number;

  

  @ApiProperty({ default: 'Nahed' })
  @Column({ length: 100 })
  fName: string;

  @ApiProperty({ default: 'M', required: false })
  @Column({ length: 100, nullable: true })
  mName?: string;

  @ApiProperty({ default: 'HadjiAli' })
  @Column({ length: 100 })
  lName: string;

  @ApiProperty({ default: 'default@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email: string;

  @ApiProperty({ default: 'student' })
  @Column({ length: 100 })
  type: 'student' | 'landlord' | 'admin';

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'inactive';

  @ApiProperty({ default: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ default: '01/02/03' })
  @Column({ length: 100 })
  birthdate: string;

  @ApiProperty({ default: 'BS-IT' })
  @Column({ length: 100 })
  degree: string;
  
  @ApiProperty({ default: 'Department of Computer Science' })
  @Column({ length: 100 })
  department: string;

  @ApiProperty({ default: 'College of Information and Computing Sciences' })
  @Column({ length: 100 })
  college: string;

  @ApiProperty({ default: '0907-478-7550' })
  @Column({ length: 100 })
  contact: string;
  
  @ApiProperty({ default: 'Male' })
  @Column({ length: 100 })
  gender: string;

  @ApiProperty({ default: '2020' })
  @Column({ length: 100 })
  yearAdmit: string;

  @ApiProperty({ default: 'Street' })
  @Column({ length: 100 })
  address1: string;

  @ApiProperty({ default: 'Barangay' })
  @Column({ length: 100 })
  address2: string;

  @ApiProperty({ default: 'Municipality' })
  @Column({ length: 100 })
  address3: string;

  @ApiProperty({ default: 'LDS' })
  @Column({ length: 100 })
  address4: string;

  @ApiProperty({ default: '123' })
  @Column({ length: 100 })
  housingunit: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;

  @OneToOne(() => HousingDto, housing => housing.user)
  @JoinColumn()
  housing: HousingDto;

  @OneToMany(() => PostDto, post => post.user)
  post: PostDto[];

  @OneToMany(() => ChatDto, chat => chat.user)
  chat: ChatDto[];
}

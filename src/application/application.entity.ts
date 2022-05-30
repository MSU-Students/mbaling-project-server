import { PostDto } from 'src/entities/post.entity';
import { UserDto } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IApplication } from 'src/interfaces/application.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Application')
export class ApplicationDto implements IApplication {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  status: string;
  
  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (student) => student.studentApplication , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  student?: UserDto;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (landlord) => landlord.landlordApplication , {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  landlord?: UserDto;

  @ApiProperty({ required: false, type: () => PostDto })
  @ManyToOne(() => PostDto, (post) => post.applications, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  post?: PostDto;
}

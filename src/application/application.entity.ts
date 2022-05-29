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

  @ApiProperty({ example: 1 })
  @Column()
  studentID: number;

  @ApiProperty({ example: 1 })
  @Column()
  landlordID: number;

  @ApiProperty({ example: 1 })
  @Column()
  postID: number;
}

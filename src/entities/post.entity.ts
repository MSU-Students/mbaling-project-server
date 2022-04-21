import { UserDto } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IPosts } from 'src/interfaces/posts.interfaces';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class PostDto implements IPosts {
  
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post_id'
  })
  id?: number;

  @ApiProperty({ default: 'Example description' })
  @Column({ length: 100 })
  description: string;

  @ApiProperty({ default: '1000' })
  @Column({ length: 100 })
  fee: string;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  negotiable: boolean;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  prvCR: boolean;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  prvKitchen: boolean;

  @ApiProperty({ default: 'https://cdn.quasar.dev/img/parallax1.jpgs' })
  @Column({ length: 100 })
  photos: string;

  @ApiProperty({ default: 'Apartment for boyzz' })
  @Column({ length: 100 })
  title: string;

  @ApiProperty({ default: 'The BOys' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: '0' })
  @Column()
  date: number;

  @ApiProperty({ default: 'Zin-Azshari Boarding House' })
  @Column({ length: 100 })
  housingAddress: string;

  @ApiProperty({ default: 'https://cdn.quasar.dev/img/avatar2.jpg' })
  @Column({ length: 100 })
  prfphoto: string;

  @ManyToOne(() => UserDto, user => user.post)
  user: UserDto

}

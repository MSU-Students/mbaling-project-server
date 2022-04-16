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
  pcBox: boolean;

  @ApiProperty({ default: 'false' })
  @Column('bool')
  pkBox: boolean;

  @ApiProperty({ default: 'example pictures' })
  @Column({ length: 100 })
  photo: string;

  @ApiProperty({ default: 'Apartment for boyzz' })
  @Column({ length: 100 })
  title: string;

  @ManyToOne(() => UserDto, user => user.post)
  user: UserDto

}

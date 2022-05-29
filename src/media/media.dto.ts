import { PostDto } from 'src/entities/post.entity';

import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Media } from './media.interface';

@Entity('photos')
export class MediaDto implements Media {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column()
  mimeType: string;

  @ApiProperty({ required: false })
  @Column()
  filename: string;

  @Column({
    type: 'mediumblob',
  })
  data: Uint8Array;

  @ApiProperty({ required: false, type: () => PostDto })
  @ManyToOne(() => PostDto, (postPhoto) => postPhoto.media)
  postPhoto?: PostDto;

  
}

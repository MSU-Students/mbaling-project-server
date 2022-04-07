import { IChat } from './../interfaces/chat.interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IPosts } from 'src/interfaces/posts.interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat')
export class ChatDto implements IChat {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'chat_id'
  })
  id?: number;

  @ApiProperty({ default: 'Example Conversation Here' })
  @Column()
  content: string;

  @ApiProperty({ default: '1' })
  @Column()
  senderId: number;


  @ApiProperty({ default: '2' })
  @Column()
  receiverId: number;

  @ApiProperty({ default: 'Conversation Date' })
  @Column()
  createdAt: string;

}

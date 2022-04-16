import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDTO {
  @ApiProperty()
  senderId: number;

  @ApiProperty()
  receiverId: number;

  @ApiProperty()
  message: string;
}

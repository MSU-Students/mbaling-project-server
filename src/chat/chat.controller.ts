import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('chat')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Chat Managment')
@ApiResponse({
  status: 401,
  description: 'Unauthorized',
})
@ApiBearerAuth()
export class ChatController {
    
}

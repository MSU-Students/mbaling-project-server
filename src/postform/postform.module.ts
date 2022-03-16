import { Module } from '@nestjs/common';
import { PostformController } from './controllers/postform/postform.controller';
import { PostformService } from './services/postform/postform.service';

@Module({
  controllers: [PostformController],
  providers: [PostformService]
})
export class PostformModule {}

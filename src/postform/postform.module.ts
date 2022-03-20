import { PostEntity } from './../typeorm/PostEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostformController } from './controllers/postform/postform.controller';
import { PostformService } from './services/postform/postform.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([PostEntity])
  ],
  controllers: [PostformController],
  providers: [{
    provide: 'POST_SERVICE',
    useClass: PostformService
  }]
})
export class PostformModule {}

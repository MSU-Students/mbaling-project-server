import { PostEntity } from './../../../typeorm/PostEntity';
import { CreatePostDto } from './../../dto/CreatePost.dto';
import { PostformService } from './../../services/postform/postform.service';
import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('postform')
export class PostformController {

    constructor(@Inject('POST_SERVICE') private readonly postService: PostformService){

     }

     @Get()
     getPosts(){
         return this.postService.getPosts();
     }

     @Post()
        @UsePipes(ValidationPipe)
    createPost(@Body() createPostDto: CreatePostDto){
        return this.postService.createPost(createPostDto)
    }
     @Put('id')
    async update(@Param('id') id: number, @Body() editPost: PostEntity){
        return this.postService.update(id, editPost)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
      return this.postService.deleteOne(id);
    }
}

import { PostformService } from './postform.service';
import { PostDto } from './../entities/post.entity';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CreatePostDto } from './post.dto';

@Controller('postform')
export class PostformController {

    constructor(
        private postService: PostformService,
        private authService: AuthService,
      ) {}
    
      @ApiBody({ type: PostDto })
      @ApiOperation({ summary: 'Add new post', operationId: 'AddPost' })
      @ApiResponse({ status: 200, type: PostDto })
      @Post('/create')
      createPost(@Body() createPostDto: CreatePostDto){
        return this.postService.createPost(createPostDto)
    }
    
      @ApiOperation({ summary: 'Get all posts', operationId: 'GetPost' })
      @ApiResponse({ status: 200, type: PostDto })
      @Get()
      async findAllPost(): Promise<PostDto[]> {
        return this.postService.findAll();
      }
    
      @ApiBearerAuth()
      @UseGuards(JwtAuthGuard)
      @ApiOperation({ summary: 'Update post by id', operationId: 'UpdatePost' })
      @ApiResponse({ status: 200, type: PostDto })
      @Put(':id')
      async updatePost(@Param('id') id: number, @Body() user: PostDto) {
        return this.postService.update(id, user);
      }
    
      @ApiBearerAuth()
      @UseGuards(JwtAuthGuard)
      @ApiOperation({ summary: 'Delete post by id', operationId: 'DeletePost' })
      @ApiResponse({ status: 200, type: PostDto })
      @Delete(':id')
      async deletePost(@Param('id') id: number) {
        return this.postService.deleteOne(id);
      }
}
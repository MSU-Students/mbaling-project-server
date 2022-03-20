import { CreatePostDto } from './../../dto/CreatePost.dto';
import { PostEntity } from '../../../typeorm/PostEntity';
import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostformService {

    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity> ){
 
    }

    async getPosts(){
        return this.postRepository.find();
    }

    async createPost(createPostDto: CreatePostDto){
        const newPost = this.postRepository.create(createPostDto);
        return this.postRepository.save(newPost)
     }

     async update(id: number, editPost: PostEntity) {
        return this.postRepository.update(id, editPost);
      }

      async deleteOne(id: number) {
        return this.postRepository.delete(id);
      }
}

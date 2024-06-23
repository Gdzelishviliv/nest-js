import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('api')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('posts')
  allPosts() {
    return this.postsService.allPosts();
  }

  @Get('posts/:id')
  findPostWithId(@Param('id') id: string) {
    const post = this.postsService.findPostWithId(id);
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.BAD_REQUEST);
    }
    return post;
  }

  @Post('posts')
  createNewPost(@Body() post) {
    return this.postsService.createNewPost(post);
  }

  @Put('posts/:id')
  updatePost(@Param('id') id: string, @Body() post) {
    if (!this.postsService.updatePost(id, post)) {
      throw new HttpException('post not found', HttpStatus.BAD_REQUEST);
    }
    return this.postsService.updatePost(id, post);
  }

  @Delete('posts/:id')
  deletePost(@Param('id') id: string) {
    if (!this.postsService.deletePost(id)) {
      throw new HttpException('post not found', HttpStatus.BAD_REQUEST);
    } else {
      console.log('post deleted on ->', id);
      return `post deleted succesfully on id -> ${id}`;
    }
  }
}

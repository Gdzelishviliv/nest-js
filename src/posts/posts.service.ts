import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NewPost, Post } from 'src/types/types';

@Injectable()
export class PostsService {
  private readonly posts: NewPost[] = [];

  allPosts(): NewPost[] {
    return this.posts;
  }

  findPostWithId(id: string): NewPost | undefined {
    return this.posts.find((i) => i.id === Number(id));
  }

  createNewPost(post: Post): NewPost[] {
    if (!post.body || !post.title) {
      throw new HttpException(
        'Title and body are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newPost = {
      id: this.posts.length + 1,
      title: post.title ?? 'no title',
      body: post.body ?? 'no body',
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return this.posts;
  }

  updatePost(id: string, updatedPost: Post): NewPost | null {
    const postIndex = this.posts.findIndex((i) => i.id === Number(id));
    if (postIndex > -1) {
      this.posts[postIndex] = {
        id: parseInt(id),
        ...updatedPost,
      };
      return this.posts[postIndex];
    }
    return null;
  }

  deletePost(id: string): NewPost[] {
    const postIndex = this.posts.findIndex((i) => i.id === Number(id));
    if (postIndex > -1) {
      const post = this.posts.splice(postIndex, 1);
      return post;
    }
    return null;
  }
}

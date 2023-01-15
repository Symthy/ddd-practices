import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entity/comment';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post('/')
  async create(@Param('content') content: string): Promise<Comment> {
    return this.commentService.create({
      comment: content,
    });
  }

  @Put(':createdAt')
  async update(
    @Param('createdAt', ParseIntPipe) createdAt: number,
    @Body('content') content: string,
  ): Promise<void> {
    await this.commentService.update({
      content,
      createdAt,
    });
  }

  @Delete(':createdAt')
  async del(
    @Param('createdAt', ParseIntPipe) createdAt: number,
  ): Promise<void> {
    await this.commentService.delete({
      createdAt,
    });
  }
}

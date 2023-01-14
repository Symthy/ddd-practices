import { Injectable } from '@nestjs/common';
import { Comment } from '../entity/comment';

export interface CommentRepository {
  save(comment: Comment): Promise<void>;
  findByCreatedAt(args: { createdAt: number }): Comment;
  update(comment: Comment): Promise<void>;
  delete({ createdAt }): Promise<void>;
}

@Injectable()
export class OnMemmoryCommentRepository implements CommentRepository {
  save(comment: Comment): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByCreatedAt(args: { createdAt: number }): Comment {
    throw new Error('Method not implemented.');
  }
  update(comment: Comment): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete({ createdAt }: { createdAt: any }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

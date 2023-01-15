import { Injectable } from '@nestjs/common';
import { Comment } from '../entity/comment';

export interface CommentRepository {
  save(comment: Comment): Promise<Comment>;
  findByCreatedAt(args: { createdAt: number }): Comment;
  update(comment: Comment): Promise<void>;
  delete({ createdAt }): Promise<void>;
}

@Injectable()
export class OnMemmoryCommentRepository implements CommentRepository {
  private comments = new Array<Comment>();

  async save(comment: Comment): Promise<Comment> {
    return Promise.resolve().then(() => {
      this.comments.push(comment);
      return comment;
    });
  }
  findByCreatedAt(args: { createdAt: number }): Comment {
    return this.comments.find((comment) => comment.equals(args.createdAt));
  }
  update(comment: Comment): Promise<void> {
    return new Promise(() => {
      const index = this.comments.findIndex((comment) =>
        comment.equals(comment),
      );
      this.comments[index] = comment;
    });
  }
  delete({ createdAt }: { createdAt: any }): Promise<void> {
    return new Promise(() => {
      const index = this.comments.findIndex((comment) =>
        comment.equals(createdAt),
      );
      this.comments.splice(index, 1);
    });
  }
}

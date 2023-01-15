import { Inject, Injectable } from '@nestjs/common';
import { CommentRepository } from './repository/comment.repository';
import { Comment } from './entity/comment';
import { COMMENT_REPOSITORY_TOKEN } from './repository/CommentRepository.module';
import { EventRegisterService } from 'src/event/eventRegister.service';
import { CommentCreatedEvent } from './events/coment.created.event';
import { CommentUpdatedEvent } from './events/comment.updated.event';
import { CommentDeletedEvent } from './events/comment.deleted.event';

@Injectable()
export class CommentService {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    private commentRepository: CommentRepository,
    private eventRegister: EventRegisterService,
  ) {}

  async create(args: { comment: string }): Promise<Comment> {
    const newComment = new Comment({
      comment: args.comment,
      createdAt: new Date(),
    });
    this.commentRepository.save(newComment);
    this.eventRegister.register(
      new CommentCreatedEvent({
        comment: newComment,
        createdAt: newComment.createdDate,
      }),
    );
    return newComment;
  }

  async update(args: { createdAt: number; content: string }): Promise<void> {
    const comment = await this.commentRepository.findByCreatedAt(args);
    comment.updateContent(args.content);
    await this.commentRepository.update(comment);
    this.eventRegister.register(new CommentUpdatedEvent({ comment }));
  }

  async delete(args: { createdAt: number }): Promise<void> {
    const comment = await this.commentRepository.findByCreatedAt(args);
    if (!comment.canBeDeleted()) {
      throw new Error('failed to delete comment');
    }
    await this.commentRepository.delete(args);
    this.eventRegister.register(new CommentDeletedEvent({ comment }));
  }
}

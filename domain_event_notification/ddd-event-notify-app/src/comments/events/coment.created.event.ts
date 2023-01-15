import { Comment } from '../entity/comment';
import {
  COMMENT_CREATED_EVENT,
  DomainEvent,
  EventType,
} from 'src/share/baseEvent';

export class CommentCreatedEvent implements DomainEvent {
  readonly createdAt: Date;
  readonly type: Extract<EventType, typeof CommentCreatedEvent.type>;
  readonly data: {
    comment: Comment;
  };

  constructor(args: { comment: Comment; createdAt?: Date }) {
    this.createdAt = args.createdAt ?? new Date();
    this.type = CommentCreatedEvent.type;
    this.data = {
      comment: args.comment,
    };
  }

  // インスタンス化しなくてもイベント名にアクセスできるようにする
  static get type(): EventType {
    return EventType[COMMENT_CREATED_EVENT];
  }
}

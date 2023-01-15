import {
  COMMENT_DELETED_EVENT,
  DomainEvent,
  EventType,
} from '../../share/baseEvent';
import { Comment } from '../entity/comment';

export class CommentDeletedEvent implements DomainEvent {
  readonly createdAt: Date;
  readonly type: Extract<EventType, typeof CommentDeletedEvent.type>;
  readonly data: {
    comment: Comment;
  };

  constructor(args: { comment: Comment; createdAt?: Date }) {
    this.createdAt = args.createdAt ?? new Date();
    this.type = CommentDeletedEvent.type;
    this.data = {
      comment: args.comment,
    };
  }

  // インスタンス化しなくてもイベント名にアクセスできるようにする
  static get type(): EventType {
    return EventType[COMMENT_DELETED_EVENT];
  }
}

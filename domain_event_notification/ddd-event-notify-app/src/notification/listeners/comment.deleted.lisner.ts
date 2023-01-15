import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CommentDeletedEvent } from 'src/comments/events/comment.deleted.event';
import { NotificationService } from '../notification.service';

@Injectable()
export class CommentDeletedListener {
  constructor(private notificationService: NotificationService) {}

  @OnEvent(CommentDeletedEvent.type)
  notify(event: CommentDeletedEvent): void {
    this.notificationService
      .notify({ message: 'コメントが削除されました！' })
      .catch((err) => {
        Logger.error(`${String(err)}, event: ${JSON.stringify(event)}`);
      });
  }
}

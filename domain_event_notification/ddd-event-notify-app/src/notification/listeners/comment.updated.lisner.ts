import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CommentUpdatedEvent } from 'src/comments/events/comment.updated.event';
import { NotificationService } from '../notification.service';

@Injectable()
export class CommentUpdatedListener {
  constructor(private notificationService: NotificationService) {}

  @OnEvent(CommentUpdatedEvent.type)
  notify(event: CommentUpdatedEvent): void {
    this.notificationService
      .notify({ message: event.data.comment.content })
      .catch((err) => {
        Logger.error(`${String(err)}, event: ${JSON.stringify(event)}`);
      });
  }
}

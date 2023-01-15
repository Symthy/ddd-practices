import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CommentCreatedEvent } from 'src/comments/events/coment.created.event';

import { NotificationService } from '../notification.service';

@Injectable()
export class CommentCreatedListener {
  constructor(private notificationService: NotificationService) {}

  @OnEvent(CommentCreatedEvent.type)
  notify(event: CommentCreatedEvent): void {
    this.notificationService
      .notify({ message: event.data.comment.content })
      .catch((err) => {
        Logger.error(`${String(err)}, event: ${JSON.stringify(event)}`);
      });
  }
}

import { Module } from '@nestjs/common';
import { CommentCreatedListener } from './listeners/comment.created.lisner';
import { CommentDeletedListener } from './listeners/comment.deleted.lisner';
import { CommentUpdatedListener } from './listeners/comment.updated.lisner';

import { NotificationService } from './notification.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    NotificationService,
    CommentCreatedListener,
    CommentUpdatedListener,
    CommentDeletedListener,
  ],
  exports: [NotificationService],
})
export class NotificationModule {}

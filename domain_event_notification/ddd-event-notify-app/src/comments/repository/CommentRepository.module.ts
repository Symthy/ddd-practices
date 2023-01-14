import { Module } from '@nestjs/common';
import { OnMemmoryCommentRepository } from './comment.repository';

export const COMMENT_REPOSITORY_TOKEN = 'comment_repository_token';

const CommentRepositoryProvider = {
  provide: COMMENT_REPOSITORY_TOKEN,
  useClass: OnMemmoryCommentRepository,
};

@Module({
  providers: [CommentRepositoryProvider],
  exports: [CommentRepositoryProvider],
})
export class CommentRepositoryModule {}

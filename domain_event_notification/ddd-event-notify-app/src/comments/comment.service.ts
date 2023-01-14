import { Inject, Injectable } from '@nestjs/common';
import { CommentRepository } from './repository/comment.repository';
import { Comment } from './entity/comment';
import { COMMENT_REPOSITORY_TOKEN } from './repository/CommentRepository.module';

@Injectable()
export class CommentService {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    private commentRepository: CommentRepository,
  ) {}

  async create(args: { content: string }): Promise<void> {
    const comment = new Comment({
      comment: args.content,
      createdAt: new Date(),
    });
    await this.commentRepository.save(comment);
  }

  async update(args: { createdAt: number; content: string }): Promise<void> {
    // createdAtをもとにdbからデータ取得
    const comment = await this.commentRepository.findByCreatedAt(args);
    // データ更新
    comment.updateContent(args.content);
    // dbに保存
    await this.commentRepository.update(comment);
  }

  async delete(args: { createdAt: number }): Promise<void> {
    // createdAtをもとにdbからデータ取得
    const comment = await this.commentRepository.findByCreatedAt(args);
    // ドメインルールチェック
    if (!comment.canBeDeleted()) {
      throw new Error('failed to delete comment');
    }
    // dbから削除
    await this.commentRepository.delete(args);
  }
}

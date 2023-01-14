export class Comment {
  private comment: string;

  private createdAt: Date;

  constructor(args: { comment: string; createdAt: Date }) {
    this.comment = args.comment;
    this.createdAt = args.createdAt;
  }

  updateContent(content: string) {
    this.comment = content;
  }

  canBeDeleted(): boolean {
    return true;
  }
}

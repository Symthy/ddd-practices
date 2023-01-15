export class Comment {
  private comment: string;

  private createdAt: Date;

  constructor(args: { comment: string; createdAt: Date }) {
    this.comment = args.comment;
    this.createdAt = args.createdAt;
  }

  get content(): string {
    return this.comment;
  }
  get createdDate(): Date {
    return this.createdAt;
  }

  updateContent(content: string) {
    this.comment = content;
  }

  canBeDeleted(): boolean {
    return true;
  }

  equals(comment: Comment): boolean;
  equals(createdAt: number): boolean;
  equals(arg: Comment | number): boolean {
    if (typeof arg === 'number') {
      return this.createdAt === new Date(arg);
    }
    return this.createdAt === arg.createdAt;
  }
}

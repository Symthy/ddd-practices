import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async notify(args: { message: string }): Promise<void> {
    return Promise.resolve().then(() => Logger.log(args.message));
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comments/comment.module';
import { EventRegisterModule } from './event/eventRegister.module';

@Module({
  imports: [CommentModule, EventRegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module, Global } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventRegisterService } from './eventRegister.service';

@Global()
@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [EventRegisterService],
  exports: [EventRegisterService],
})
export class EventRegisterModule {}

import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { DomainEvent } from '../share/baseEvent';

@Injectable()
export class EventRegisterService {
  constructor(private eventEmitter: EventEmitter2) {}

  register(event: DomainEvent): void {
    this.eventEmitter.emit(event.type, event);
  }
}

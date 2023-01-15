import { stringToEnum } from './util';

export const COMMENT_CREATED_EVENT = 'comment.created';
export const COMMENT_UPDATED_EVENT = 'comment.udpated';
export const COMMENT_DELETED_EVENT = 'comment.deleted';

export const EventType = stringToEnum([
  COMMENT_CREATED_EVENT,
  COMMENT_UPDATED_EVENT,
  COMMENT_DELETED_EVENT,
]);
export type EventType = keyof typeof EventType;

export interface DomainEvent {
  readonly type: EventType;
  readonly createdAt: Date;
  readonly data: Record<string, unknown>;
}

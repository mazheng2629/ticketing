import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@zhengmalearning/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

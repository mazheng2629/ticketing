import {
  Publisher,
  TicketUpdatedEvent,
  Subjects,
} from "@zhengmalearning/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

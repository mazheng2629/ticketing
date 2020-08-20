import {
  Publisher,
  TicketCreatedEvent,
  Subjects,
} from "@zhengmalearning/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@zhengmalearning/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

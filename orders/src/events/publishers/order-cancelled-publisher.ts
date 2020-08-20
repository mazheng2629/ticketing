import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@zhengmalearning/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

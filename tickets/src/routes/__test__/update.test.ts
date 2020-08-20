import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns 404 when the ticket is not exist", async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "asdf",
      price: 20,
    })
    .expect(404);
});

it("returns 401 when user not authorized", async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: "asdf",
      price: 20,
    })
    .expect(401);
});

it("returns 404 when user not not own the ticket", async () => {
  const response = await request(app)
    .post("/api/tickets/")
    .set("Cookie", global.signin())
    .send({
      title: "asdf",
      price: 20,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "asdf",
      price: 20,
    })
    .expect(401);
});

it("returns 400 when user provide invalid inputs", async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets/")
    .set("Cookie", cookie)
    .send({
      title: "asdf",
      price: 20,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "",
      price: 20,
    })
    .expect(400);
});

it("returns 200 when user provide correct inputs and update the ticket", async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets/")
    .set("Cookie", cookie)
    .send({
      title: "asdf",
      price: 20,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new",
      price: 10,
    })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send();

  expect(ticketResponse.body.title).toEqual("new");
  expect(ticketResponse.body.price).toEqual(10);
});

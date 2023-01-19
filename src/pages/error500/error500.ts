import { Error, Link } from "../../components";

export const error500 = new Error({
  code: "500",
  text: "Мы уже фиксим",
  link: new Link({ href: "#/chats", title: "Назад к чатам" }),
});

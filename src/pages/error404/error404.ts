import { Error, Link } from "../../components";

export const error404 = new Error({
  code: "404",
  text: "Не туда попали",
  link: new Link({ href: "#/chats", title: "Назад к чатам" }),
});

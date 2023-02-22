import { Button, Form, FormItem } from "./components";
import { render } from "./core";

const form = new Form({
  controls: [new FormItem({ name: "avatar", type: "file" })],
  btn: new Button({ title: "click", type: "submit" }),
});

render("#root", form);

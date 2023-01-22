import { Button, Form, FormItem } from "./components";
import { render } from "./core/render";

import "./styles/styles.scss";

const control = new FormItem({ name: "Test" });
const form = new Form({
  controls: [control],
  btn: new Button({ title: "GO!", type: "submit" }),
  events: {
    submit: (event: SubmitEvent) => {
      event.preventDefault();

      const fields = (event.target as HTMLFormElement).querySelectorAll(
        "[name]"
      );
      fields.forEach((n: HTMLInputElement) => {
        console.log(n.value);
      });
    },
  },
});

render("#app", form);

// setTimeout(() => {
//   control.props.input.setProps({
//     events: {
//       focus: (e) => console.log("eeeee", e),
//     },
//   });
// }, 10000);

import { Button } from "./components";
import { render } from "./core/render";

import "./styles/styles.scss";

const btn = new Button({
  title: "Click me!",
  type: "button",
  events: {
    click: () => {
      console.log("Clicked!");
    },
  },
});
render("#app", btn);

setTimeout(() => {
  btn.setProps({
    title: "Link me, please",
  });
}, 10000);

import { Button } from "./components";
import { render } from "./core/render";

import "./styles/styles.scss";

const btn = new Button({
  title: "Click me!",
  events: {
    click: () => {
      console.log("Clicked!");
    },
  },
});
render("#app", btn);

setTimeout(() => {
  btn.setProps({
    classname: "Click",
  });
}, 10000);

import { Layout, Link } from "./components";
import { render } from "./core/render";
import { Routes } from "./routing/routing.consts";
import { RouteNames } from "./routing/routing.types";

import "./styles/styles.scss";

function resolveRoute() {
  const route =
    (window.location.hash.slice(1) as RouteNames) || RouteNames.BASE;
  const content = Routes[route];
  render(
    "#root",
    new Layout({ content, link: new Link({ href: "#", title: "На главную" }) })
  );
}

window.addEventListener("load", resolveRoute);
window.addEventListener("hashchange", resolveRoute);

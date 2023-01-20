import { Layout, Link } from "./components";
import { render } from "./core";
import { Routes, RouteNames } from "./routing";

import "./styles/styles.scss";

function resolveRoute() {
  const route =
    (window.location.hash.slice(1) as RouteNames) || RouteNames.BASE;
  const content = Routes[route];
  render("#root", new Layout({ content }));
}

window.addEventListener("load", resolveRoute);
window.addEventListener("hashchange", resolveRoute);

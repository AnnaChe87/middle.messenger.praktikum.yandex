import layout from "./components/layout";
import { Routes } from "./routing/routing.consts";
import { RouteNames } from "./routing/routing.types";

import "./styles/styles.scss";

const root = document.getElementById("root");

function resolveRoute() {
  if (!root) return;
  const route =
    (window.location.hash.slice(1) as RouteNames) || RouteNames.BASE;
  const content = Routes[route]();
  root.innerHTML = layout({ content });
}

window.addEventListener("load", resolveRoute);
window.addEventListener("hashchange", resolveRoute);

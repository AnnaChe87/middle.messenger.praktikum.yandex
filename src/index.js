import index from "./index.hbs";
import login from "./pages/login"
import signin from "./pages/signin";
import error404 from "./pages/error404";
import layout from "./components/layout";
import error404 from "./pages/error404";
import error500 from "./pages/error500";

import "./styles/styles.scss";
import chats from "./pages/chats";
import profile from "./pages/profile";

const routes = {
    "/" : index,
    "/login": login,
    "/signin": signin,
    "/404": error404,
    "/500": error500,
    "/chats": chats,
    "/profile": profile,
    "/profile-edit": () => profile({ isEdit: true }),
    "/profile-pass": () => profile({ isEdit: true, isPassword: true }),
}

const root = document.getElementById("root");
function resolveRoute() {
    const route = window.location.hash.slice(1) || "/";
    const content = routes[route]();
    root.innerHTML = layout({content});
}

window.addEventListener("load", resolveRoute);
window.addEventListener("hashchange", resolveRoute);

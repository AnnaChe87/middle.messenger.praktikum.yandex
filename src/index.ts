import { Layout } from "./components";
import { Router } from "./routing/Routing";
import {
  chats,
  error404,
  error500,
  login,
  profile,
  profileEdit,
  profilePass,
  signin,
} from "./pages";
import { ROUTE_NAMES } from "./routing";

import "./styles/styles.scss";
import { Actions } from "./core";

const unAuthorizedRedirect = () => {
  if (!Actions.getProfile()?.id) {
    Router._instance.go(ROUTE_NAMES.BASE);
    return true;
  }
  return false;
};

const alreadyAuthorizedRedirect = () => {
  if (Actions.getProfile()?.id) {
    Router._instance.go(ROUTE_NAMES.MESSENGER);
    return true;
  }
  return false;
};

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router("#root")
    .use(
      ROUTE_NAMES.BASE,
      Layout,
      { content: login },
      alreadyAuthorizedRedirect
    )
    .use(
      ROUTE_NAMES.SIGNUP,
      Layout,
      { content: signin },
      alreadyAuthorizedRedirect
    )
    .use(
      ROUTE_NAMES.MESSENGER,
      Layout,
      { content: chats },
      unAuthorizedRedirect
    )
    .use(ROUTE_NAMES.ERROR404, Layout, { content: error404 })
    .use(ROUTE_NAMES.ERROR500, Layout, { content: error500 })
    .use(
      ROUTE_NAMES.SETTINGS,
      Layout,
      { content: profile },
      unAuthorizedRedirect
    )
    .use(
      ROUTE_NAMES.PROFILE_EDIT,
      Layout,
      { content: profileEdit },
      unAuthorizedRedirect
    )
    .use(
      ROUTE_NAMES.PROFILE_PASS,
      Layout,
      { content: profilePass },
      unAuthorizedRedirect
    );

  router.start();
});

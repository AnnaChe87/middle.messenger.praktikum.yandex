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

const unauthorizedGuard = () => {
  return !Actions.getProfile()?.id;
};

export const router = new Router("#root")
  .use(ROUTE_NAMES.BASE, Layout, { content: chats }, unauthorizedGuard)
  .use(ROUTE_NAMES.LOGIN, Layout, { content: login })
  .use(ROUTE_NAMES.SIGNIN, Layout, { content: signin })
  .use(ROUTE_NAMES.ERROR404, Layout, { content: error404 })
  .use(ROUTE_NAMES.ERROR500, Layout, { content: error500 })
  .use(ROUTE_NAMES.PROFILE, Layout, { content: profile }, unauthorizedGuard)
  .use(
    ROUTE_NAMES.PROFILE_EDIT,
    Layout,
    { content: profileEdit },
    unauthorizedGuard
  )
  .use(
    ROUTE_NAMES.PROFILE_PASS,
    Layout,
    { content: profilePass },
    unauthorizedGuard
  );

router.start();

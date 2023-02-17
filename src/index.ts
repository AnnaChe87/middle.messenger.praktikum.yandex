import { Layout } from "./components";
import { Router } from "./routing/Routing";
import {
  error404,
  error500,
  login,
  navigation,
  profile,
  profileEdit,
  profilePass,
  signin,
} from "./pages";
import { RouteNames } from "./routing";

import "./styles/styles.scss";

new Router("#root")
  .use(RouteNames.BASE, Layout, { content: navigation })
  .use(RouteNames.LOGIN, Layout, { content: login })
  .use(RouteNames.SIGNIN, Layout, { content: signin })
  .use(RouteNames.ERROR404, Layout, { content: error404 })
  .use(RouteNames.ERROR500, Layout, { content: error500 })
  .use(RouteNames.PROFILE, Layout, { content: profile })
  .use(RouteNames.PROFILE_EDIT, Layout, { content: profileEdit })
  .use(RouteNames.PROFILE_PASS, Layout, { content: profilePass })
  .start();

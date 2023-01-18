import { Route, RouteNames } from "./routing.types";
import index from "../index.hbs";
import login from "../pages/login";
import signin from "../pages/signin";
import error404 from "../pages/error404";
import error500 from "../pages/error500";
import chats from "../pages/chats";
import profile from "../pages/profile";

export const Routes: Record<RouteNames, Route> = {
  [RouteNames.BASE]: index,
  [RouteNames.LOGIN]: login,
  [RouteNames.SIGNIN]: signin,
  [RouteNames.ERROR404]: error404,
  [RouteNames.ERROR500]: error500,
  [RouteNames.CHATS]: chats,
  [RouteNames.PROFILE]: profile,
  [RouteNames.PROFILE_EDIT]: () => profile({ isEdit: true }),
  [RouteNames.PROFILE_PASS]: () => profile({ isEdit: true, isPassword: true }),
};

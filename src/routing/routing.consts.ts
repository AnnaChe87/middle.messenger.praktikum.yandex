import { Route, RouteNames } from "./routing.types";

import { chats, error404, error500, login, navigation, signin } from "../pages";

// export const Routes: Record<RouteNames, Route> = {
//   [RouteNames.BASE]: index,
//   [RouteNames.LOGIN]: () => login.getContent(),
//   [RouteNames.SIGNIN]: signin,
//   [RouteNames.ERROR404]: error404,
//   [RouteNames.ERROR500]: error500,
//   [RouteNames.CHATS]: chats,
//   [RouteNames.PROFILE]: profile,
//   [RouteNames.PROFILE_EDIT]: () => profile({ isEdit: true }),
//   [RouteNames.PROFILE_PASS]: () => profile({ isEdit: true, isPassword: true }),
// };

export const Routes: Record<RouteNames, Route> = {
  [RouteNames.BASE]: navigation,
  [RouteNames.LOGIN]: login,
  [RouteNames.SIGNIN]: signin,
  [RouteNames.ERROR404]: error404,
  [RouteNames.ERROR500]: error500,
  [RouteNames.CHATS]: chats,
};

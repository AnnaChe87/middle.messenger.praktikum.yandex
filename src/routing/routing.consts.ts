import { Route, RouteNames } from "./routing.types";
import {
  chats,
  error404,
  error500,
  login,
  navigation,
  profile,
  profileEdit,
  profilePass,
  signin,
} from "../pages";

export const Routes: Record<RouteNames, Route> = {
  [RouteNames.BASE]: navigation,
  [RouteNames.LOGIN]: login,
  [RouteNames.SIGNIN]: signin,
  [RouteNames.ERROR404]: error404,
  [RouteNames.ERROR500]: error500,
  [RouteNames.CHATS]: chats,
  [RouteNames.PROFILE]: profile,
  [RouteNames.PROFILE_EDIT]: profileEdit,
  [RouteNames.PROFILE_PASS]: profilePass,
};

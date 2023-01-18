export enum RouteNames {
  BASE = "/",
  LOGIN = "/login",
  SIGNIN = "/signin",
  ERROR404 = "/error404",
  ERROR500 = "/error500",
  CHATS = "/chats",
  PROFILE = "/profile",
  PROFILE_EDIT = "/profile-edit",
  PROFILE_PASS = "/profile-pass",
}

export type Route = () => string;

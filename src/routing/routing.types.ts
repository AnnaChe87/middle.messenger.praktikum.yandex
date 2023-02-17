import { Block } from "../core";
import { Props } from "../index.types";

export enum RouteNames {
  BASE = "/",
  LOGIN = "/login",
  SIGNIN = "/signin",
  ERROR404 = "/404",
  ERROR500 = "/500",
  CHATS = "/chats",
  PROFILE = "/profile",
  PROFILE_EDIT = "/profile-edit",
  PROFILE_PASS = "/profile-pass",
}

export type Route = Block<Props>;

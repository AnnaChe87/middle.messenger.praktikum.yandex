import { Block } from "../core";
import { Props } from "../index.types";

export enum ROUTE_NAMES {
  BASE = "/",
  SIGNUP = "/sign-up",
  MESSENGER = "/messenger",
  ERROR404 = "/404",
  ERROR500 = "/500",
  SETTINGS = "/settings",
  PROFILE_EDIT = "/profile-edit",
  PROFILE_PASS = "/profile-pass",
}

export type Route = Block<Props>;

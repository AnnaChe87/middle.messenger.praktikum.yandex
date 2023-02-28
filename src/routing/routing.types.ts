import { Block } from "../core";
import { Props } from "../index.types";

export enum ROUTE_NAMES {
  BASE = "/",
  LOGIN = "/login",
  SIGNIN = "/signin",
  ERROR404 = "/404",
  ERROR500 = "/500",
  PROFILE = "/profile",
  PROFILE_EDIT = "/profile-edit",
  PROFILE_PASS = "/profile-pass",
}

export type Route = Block<Props>;

import { Props } from "../../index.types";
import { Button } from "../button";
import { Modal } from "../modal";

export type AvatarProps = Props & {
  value?: string;
  changeAvatarModal?: Modal;
  btn?: Button;
  hasAvatar?: boolean;
  avatarPath?: string | null;
};

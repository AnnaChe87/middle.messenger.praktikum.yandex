import { Actions, Block, EVENTS, Store } from "../../core";
import { AvatarProps } from "./avatar.types";
import { Button } from "../button";
import { Form, FormItem } from "../form";
import { Modal } from "../modal";
import template from "./avatar.hbs";

import "./avatar.scss";
import { profileController } from "../../controllers";

/**
 * Контрол отображения/изменения аватара в профиле
 */
export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    const store = new Store();
    const avatarPath = Actions.getAvatarPath();
    super({
      ...props,
      classname: !avatarPath ? ["without-avatar"] : [],
      changeAvatarModal: new Modal({
        title: "Загрузите файл",
        content: new Form({
          controls: [new FormItem({ type: "file", name: "avatar" })],
          btn: new Button({
            title: "Поменять",
            type: "submit",
          }),
          handleSubmit: profileController.updateAvatar,
        }),
      }),
      btn: new Button({
        classname: ["overlay"],
        title: "Поменять аватар",
      }),
      hasAvatar: !!avatarPath,
      avatarPath: avatarPath,
    });
    this.props?.btn?.setProps({
      events: {
        click: () => this.props?.changeAvatarModal?.show(),
      },
    });

    store.on(EVENTS.UPDATE_PROFILE, () => this._updateAvatarProps());
  }

  render() {
    return this.compile(template, this.props);
  }

  _updateAvatarProps() {
    const avatarPath = Actions.getAvatarPath();
    this.setProps({
      classname: !avatarPath ? ["without-avatar"] : [],
      hasAvatar: !!avatarPath,
      avatarPath: avatarPath,
    });
  }
}

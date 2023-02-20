import {
  Button,
  Chat,
  ChatList,
  FormItem,
  Link,
  Modal,
} from "../../components";
import { Props } from "../../index.types";

export type ChatsProps = Props & {
  chatList?: ChatList;
  currentChat?: Chat;
  link?: Link;
  search?: FormItem;
  btn?: Button;
  addChatModal?: Modal;
};

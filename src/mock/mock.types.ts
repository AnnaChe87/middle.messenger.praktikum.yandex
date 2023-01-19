export type UserModel = {
  id?: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type MessageModel = {
  user: UserModel;
  time: string;
  content: string;
  contentType: string;
};

export type ChatModel = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: MessageModel;
};

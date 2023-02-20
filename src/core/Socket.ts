import { Actions } from ".";

const WS_URL = "wss://ya-praktikum.tech/ws/chats";

export type SocketMessageContract = {
  chat_id: number;
  content: string;
  id: number;
  is_read: true;
  time: string;
  type: "message";
  user_id: number;
};

export class Socket {
  socket: WebSocket;
  private userId: number;
  private chatId: number;
  private token: string;

  constructor(userId: number, chatId: number, token: string) {
    this.userId = userId;
    this.chatId = chatId;
    this.token = token;
    this.socket = new WebSocket(`${WS_URL}/${userId}/${chatId}/${token}`);
    this._init();
  }

  _init() {
    this.socket.addEventListener("open", () => {
      this.send({
        content: "0",
        type: "get old",
      });
    });

    this.socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data) as SocketMessageContract;
      const messages = Array.isArray(data) ? data : [data];

      Actions.setMessages(messages);
    });
  }

  send(data: any) {
    this.socket.send(JSON.stringify(data));
  }

  message({ message }: { message: string }) {
    this.send({
      content: message,
      type: "message",
    });
  }
}

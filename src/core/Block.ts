import { v4 as makeUUID } from "uuid";
import EventBus from "./EventBus";
import { Props } from "../index.types";

type MetaInfo = {
  tagName: string;
  props: Props;
};

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_RENDER = "flow:render",
  FLOW_CDU = "flow:component-did-update",
}

type BlockEventBus = EventBus<EVENTS>;

export default class Block {
  _id: string = makeUUID();
  _element: HTMLElement;
  _meta: MetaInfo;
  props: Props;
  eventBus: () => BlockEventBus;

  constructor(tagName = "div", props: Props) {
    const eventBus = new EventBus<EVENTS>();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: BlockEventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount(props: Props) {
    this.componentDidMount(props);
  }

  componentDidMount(oldProps: Props) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: Props, newProps: Props) {
    let needUpdate = false;
    Object.keys(newProps).forEach((key) => {
      if (newProps[key] !== oldProps[key]) {
        needUpdate = true;
      }
    });
    return needUpdate;
  }

  setProps = (nextProps?: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    this._element.innerHTML = block;
  }

  render(): string {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: Props) {
    const self = this;

    return new Proxy(props, {
      get(target: Props, prop: string) {
        const val = target[prop];
        return typeof val === "function" ? val.bind(target) : val;
      },
      set(target, prop: string, value) {
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU, oldProps, { [prop]: value });
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}

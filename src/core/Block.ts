import { v4 as makeUUID } from "uuid";
import { EventBus } from "./EventBus";
import { Props, Template } from "../index.types";
import { isBlockArray } from "../utils/isBlockArray";

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

export class Block {
  private _key: string;
  private _element: HTMLElement;
  private _meta: MetaInfo;

  protected props: Props;
  private children: Record<string, Block | Block[]>;
  protected eventBus: () => BlockEventBus;

  constructor(props: Props, tagName?: string) {
    const eventBus = new EventBus<EVENTS>();
    this._key = makeUUID();
    this._meta = {
      tagName: tagName || "div",
      props,
    };

    this.props = this._makePropsProxy(props);
    this.children = this._getChildren(props).children;

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

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((block) => block.componentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

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

    this._clearEvents();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this._addEvents();
    this._addAttributes();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  _addAttributes() {
    this._element.classList.remove(...this._element.classList);
    if (!this.props.classname || this.props.classname?.length === 0) {
      return;
    }

    this._element.classList?.add(...this.props.classname);
  }

  _addEvents() {
    Object.entries(this.props.events || {}).forEach(([event, cb]) => {
      this._element.addEventListener(event, cb);
    });
  }

  _clearEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((event) => {
      this._element.removeEventListener(event, events[event]);
    });
  }

  compile(template: Template, props: Props): DocumentFragment {
    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;

    const stubs: Record<string, string | string[]> = {};

    Object.entries(this.children).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        stubs[key] = value.map(
          (block) => `<div data-key="${block._key}"></div>`
        );
      } else {
        stubs[key] = `<div data-key="${value._key}"></div>`;
      }
    });

    const htmlString = template({ ...props, ...stubs });
    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach((child) => {
      const arr = Array.isArray(child) ? child : [child];

      arr.forEach((block) => {
        const stub = fragment.content.querySelector(
          `[data-key="${block._key}"]`
        );
        stub?.replaceWith(block.getContent());
      });
    });
    return fragment.content;
  }

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
      set(target: Props, prop: string, value) {
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _createDocumentElement(tagName: string) {
    const el = document.createElement(tagName);
    el.setAttribute("data-key", this._key);
    return el;
  }

  _getChildren(propsAndChildren: Props) {
    const children: Record<string, Block | Block[]> = {};
    const props: Props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block || isBlockArray(value)) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }
}

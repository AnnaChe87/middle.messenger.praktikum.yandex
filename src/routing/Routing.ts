import { Props } from "../index.types";
import { Block } from "../core/Block";
import { ROUTE_NAMES } from "./routing.types";

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;
  root.innerHTML = "";

  root.appendChild(block.getContent());
  return root;
}

class Route {
  _pathname: string;
  _blockClass: any;
  _block: Block<Props> | null;
  _props: Props;
  _guard?: () => boolean;

  constructor(
    pathname: string,
    view: Block,
    props: Props,
    guard?: () => boolean
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
    this._guard = guard;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._props.rootQuery, this._block!);
      return;
    }

    this._block.show();
  }
}

export class Router {
  static _instance: Router;
  routes: Route[];
  history: History;
  _currentRoute: Route | null;
  _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router._instance = this;
  }

  use(pathname: string, block: any, props: Props = {}, guard?: () => boolean) {
    const route = new Route(
      pathname,
      block,
      {
        ...props,
        rootQuery: this._rootQuery,
      },
      guard
    );
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go(ROUTE_NAMES.ERROR404);

      return;
    }

    if (route._guard?.()) {
      this.go(ROUTE_NAMES.LOGIN);

      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

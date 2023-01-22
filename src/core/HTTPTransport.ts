enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  headers?: Record<string, string>;
  data?: Object;
  timeout?: number;
};

type HTTPMethod = (
  url: string,
  options: Omit<Options, "method">
) => Promise<XMLHttpRequest>;

function queryStringify(data: Object): string {
  const entries = Object.entries(data);
  return entries
    .reduce((acc, [key, value], index) => {
      return `${acc}${key}=${value}${index === entries.length - 1 ? "" : "&"}`;
    }, "?")
    .slice(0, -1);
}

export class HTTPTransport {
  get: HTTPMethod = (url, options) => {
    if (options.data) {
      url = `${url}${queryStringify(options.data)}`;
      delete options.data;
    }
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  put: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  post: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  delete: HTTPMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (
    url: string,
    options: Options,
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.timeout = timeout;
      Object.entries(headers || {}).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET && !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

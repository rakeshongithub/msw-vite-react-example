import { http, HttpResponse } from "msw";
import { endpoints } from "./endpoints";

type EndpointResponse<T> = (req: {
  params: { [key: string]: string };
}) => T | T[];

const handlers: ReturnType<typeof http.get | typeof http.post>[] = [];

Object.keys(endpoints)?.forEach((resource) => {
  endpoints[resource]?.map((endpoint) => {
    const { method, path, response } = endpoint;
    const responseHandler = (request: {
      params: { [key: string]: string };
    }) => {
      if (typeof response === "function") {
        return HttpResponse.json(
          response(request) as EndpointResponse<unknown>
        );
      }

      return HttpResponse.json(response);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const httpMethod = (http as any)[method.toLowerCase()];
    if (httpMethod) {
      handlers.push(httpMethod(path, responseHandler));
    } else {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }
  });
});

export { handlers };

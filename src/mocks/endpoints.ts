type EndpointMethod = "GET" | "POST";

interface Endpoint<T> {
  method: EndpointMethod;
  path: string;
  response: (req: {
    body?: object;
    params: { [key: string]: string };
  }) => T | T[];
}

interface Endpoints {
  [resource: string]: Endpoint<unknown>[];
}

export const endpoints: Endpoints = {
  users: [
    {
      method: "GET",
      path: "/users",
      response: () => [
        { id: 1, name: "John Maverick" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Foo bar" },
      ],
    },
    {
      method: "GET",
      path: "/users/:id", // Dynamic route for users detail
      response: (req) => ({
        name: `User ${req.params.id}`,
      }),
    },
    {
      method: "POST",
      path: "/users",
      response: (req) => ({ id: Date.now(), ...req.body }),
    },
  ],
  products: [
    {
      method: "GET",
      path: "/products",
      response: () => [
        { id: 1, name: "Product A", price: 9.99 },
        { id: 2, name: "Product B", price: 19.99 },
      ],
    },
  ],
};

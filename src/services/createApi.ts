import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

export const baseQueryWithMinRetry = retry(baseQuery, { maxRetries: 3 });

export const createApiWithRetry = createApi({
  /**
   * reducerPath is used to name the slice in the store.
   * @see https://redux-toolkit.js.org/rtk-query/api/createApi#reducerpath
   * The reducerPath is a unique key that your service will be mounted to in your store.
   * If you call createApi more than once in your application, you will need to provide
   * a unique value each time. Defaults to 'api'.
   */
  reducerPath: "rtkvite",
  /**
   * @see https://redux-toolkit.js.org/rtk-query/api/createApi#basequery
   * A bare bone baseQuery would just be `fetchBaseQuery({ baseUrl: BASE_URL })`
   */
  baseQuery: baseQueryWithMinRetry,
  /**
   * @see https://redux-toolkit.js.org/rtk-query/api/createApi#tagtypes
   * Tag types are used to group endpoints together in the store.
   */
  tagTypes: ["Posts"],
  endpoints: () => ({}),
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  //   refetchOnMountOrArgChange: true,
  //   keepUnusedDataFor: 5,
});

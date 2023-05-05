import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});

export default commonApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/reactjs-workshop' }),
  endpoints: () => ({}),
});

export default commonApi;
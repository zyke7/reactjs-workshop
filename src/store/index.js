import { configureStore } from '@reduxjs/toolkit'
import commonApi from './api/common.api';
import posts from './features/posts/posts.slice';

const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    posts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commonApi.middleware),
})

export default store
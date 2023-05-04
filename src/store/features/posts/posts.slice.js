import { createSlice } from "@reduxjs/toolkit";
import postsApi from "../../api/posts.api";

const initialState = {
  data: [],
  error: {},
  loading: false,
}
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.fetchPosts.matchPending,
      (state, { payload }) => {
        state.loading = true;
      }
    )
    builder.addMatcher(
      postsApi.endpoints.fetchPosts.matchFulfilled,
      (state, { payload }) => {
        state.data = [...state.data,...payload.page['content-items'].content]
        state.loading = false
      }
    )
  }
})

export default postsSlice.reducer;
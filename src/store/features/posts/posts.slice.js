import { createSlice } from "@reduxjs/toolkit";
import postsApi from "../../api/posts.api";

const initialState = {
  data: [],
  meta: {},
  error: {},
  filterKeyword: '',
  loading: false,
}
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updateFilterKeyword: (state, action) => {
      state.filterKeyword = action.payload;
    },
    resetFilterKeyword: (state) => {
      state.filterKeyword = initialState.filterKeyword;
    }
  },
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
        const { 'content-items': contentItems, ...rest } = payload.page;
        state.data = [...state.data, ...contentItems.content];
        state.meta = rest;
        state.loading = false
      }
    )
  }
})

export const { updateFilterKeyword, resetFilterKeyword } = postsSlice.actions;
export default postsSlice.reducer;
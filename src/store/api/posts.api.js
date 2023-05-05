import commonApi from "./common.api";

const postsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPosts: build.query({
      query: (pageNumber) => `/mock/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`,

    })
  })
})

export const { useFetchPostsQuery, useLazyFetchPostsQuery } = postsApi;

export default postsApi;

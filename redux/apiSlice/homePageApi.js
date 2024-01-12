import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const homePageApi = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org',
  }),
  endpoints: builder => ({
    getAuthor: builder.query({
      query: authorName => `/search/authors.json?q=${authorName}`,
    }),
  }),
});

export const {useGetAuthorQuery} = homePageApi;

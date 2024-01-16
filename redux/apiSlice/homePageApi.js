import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const homePageApi = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com',
  }),
  endpoints: builder => ({
    getShow: builder.query({
      query: showName => `/search/shows?q=${showName}`,
    }),
    getMusic: builder.query({
      query: () => '/search/shows?q=all',
    }),
  }),
});

export const {useGetShowQuery, useGetMusicQuery} = homePageApi;

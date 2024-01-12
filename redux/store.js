import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {homePageApi} from './apiSlice/homePageApi';

export const store = configureStore({
  reducer: {
    // todoReducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(homePageApi.middleware),
});

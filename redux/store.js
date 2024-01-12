import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {homePageApi} from './apiSlice/homePageApi';
import homePageReducer from './apiSlice/homePageSlice';

export const store = configureStore({
  reducer: {
    homePageReducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(homePageApi.middleware),
});

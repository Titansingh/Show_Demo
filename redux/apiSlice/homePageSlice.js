import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  lastSearches: [{id: 1, text: 'Bill Gates'}],
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    addLastSearch: (state, action) => {
      const lastSearch = {
        id: nanoid(),
        text: action.payload,
      };
      state.lastSearches.push(lastSearch);

      if (state.lastSearches.length > 3) {
        state.lastSearches.splice(0, state.lastSearches.length - 3);
      }
    },
    removeLastSearch: (state, action) => {
      state.lastSearches = state.lastSearches.filter(
        lastSearch => lastSearch.id !== action.payload,
      );
    },
  },
});

export const {addLastSearch, removeLastSearch} = homePageSlice.actions;
export default homePageSlice.reducer;

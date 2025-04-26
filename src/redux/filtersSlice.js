import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilter,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

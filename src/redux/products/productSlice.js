import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getProductsThunk } from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.products = action.payload;
  state.error = '';
};

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getProductsThunk.pending, handlePending)
      .addCase(getProductsThunk.fulfilled, handleFulfilled)
      .addCase(getProductsThunk.rejected, handleRejected);
  },
});

export const productReduser = productSlice.reducer;

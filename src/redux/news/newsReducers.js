import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initials';
import { getNewsSearchThunk, getNewsThunk } from './thunk';

// export const getNewsThunk = () => {
//   return async dispatch => {
//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(newsSlice.actions.fetchError(error));
//     }
//   };
// }; это заменяем на ⬇⬇⬇

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.news = payload.articles;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const customArr = [getNewsThunk, getNewsSearchThunk];

// const fn = status => customArr.map(el => el[status]);

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // .addCase(getNewsThunk.pending, handlePanding)
      // .addCase(getNewsThunk.fulfilled, handleFullfilled)
      // .addCase(getNewsThunk.rejected, handleRejected)
      // .addCase(getNewsSearchThunk.pending, handlePanding)
      // .addCase(getNewsSearchThunk.fulfilled, handleFullfilled)
      // .addCase(getNewsSearchThunk.rejected, handleRejected)

      //====================не работает========================
      // .addMatcher(isAnyOf([...fn('pending')], handlePending))
      // .addMatcher(isAnyOf([...fn('fulfilled')], handleFulfilled))
      // .addMatcher(isAnyOf([...fn('rejected')], handleRejected));
      //====================не работает========================

      .addMatcher(isAnyOf(...customArr.map(el => el.pending)), handlePending)
      .addMatcher(
        isAnyOf(...customArr.map(el => el.fulfilled)),
        handleFulfilled
      )
      .addMatcher(isAnyOf(...customArr.map(el => el.rejected)), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;

// reducers: {
//   fetching: (state, action) => {
//     state.isLoading = true;
//   },
//   fetchSuccess: (state, { payload }) => {
//     state.isLoading = false;
//     state.news = payload.articles;
//     state.error = null;
//   },
//   fetchError: (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
// },
//==================один варіант : ================
// extraReducers: {
//   [getNewsThunk.pending]: (state) => {
//     state.isLoading = true;
//   },
//   [getNewsThunk.fulfilled]: (state, { payload }) => {
//     state.isLoading = false;
//     state.news = payload.articles;
//     state.error = null;
//   },
//   [getNewsThunk.rejected]: (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
// },
//===============================
//ЧЕРЕЗ builder.addCase
//

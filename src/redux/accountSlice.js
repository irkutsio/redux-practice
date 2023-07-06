import {  createSlice } from '@reduxjs/toolkit';


const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 0,
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const {deposit,withdraw} = accountSlice.actions

export const accountReducer = accountSlice.reducer


//===========================



// const INITIALSTATE = {
//   balance: 0,
// };

// export const deposit = createAction('account/deposit');
// export const withdraw = createAction('account/withdraw');

// export const accountReducer = createReducer(INITIALSTATE, {
//   [deposit](state, action) {
//     state.balance += action.payload;
//   },
//   [withdraw](state, action) {
//     state.balance -= action.payload;
//   },
// });


// export const accountReducer = (state = INITIALSTATE, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };

//     case 'account/withdraw':
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = value => {
//   return {
//     type: 'account/deposit',
//     payload: value,
//   };
// };

// export const withdraw = value => {
//   return {
//     type: 'account/withdraw',
//     payload: value,
//   };
// };

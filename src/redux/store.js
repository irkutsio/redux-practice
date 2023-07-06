// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { userReducer } from './userSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer:{
    user: userReducer,
    account: accountReducer,
  }
})




// const rootReducer = combineReducers({
//   user: userReducer,
//   account: accountReducer,
// });

// const enhancer = devToolsEnhancer();




// export const store = createStore(rootReducer);

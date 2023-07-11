// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { newsReducer } from './news/newsReducers';
import { userReducer } from './userSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    news: newsReducer,
  },
});



//================================================
// ..это под капотом
// const customMiddleware = state => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         action(state.dispatch);
//         return;
//       }
//       return next(action);
//     };
//   };
// };
//==================================================



// const rootReducer = combineReducers({
//   user: userReducer,
//   account: accountReducer,
// });

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer);

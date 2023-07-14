import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products;

// export const sortedProducts = state =>{
//     const products = selectProducts(state)
//     return  [...products.products].sort((a, b) => a.price - b.price);

// }


//мемоизировала
export const sortedProducts = createSelector([selectProducts], products => {
  return [...products.products].sort((a, b) => a.price - b.price);
});

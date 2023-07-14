import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from 'services/productsApi';

export const getProductsThunk = createAsyncThunk('products/get', async () => {
 return await getProducts();
});

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Thunk for fetching products
export const getProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data; // this should be an array, NOT a Promise
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // ✅ payload is a plain array
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

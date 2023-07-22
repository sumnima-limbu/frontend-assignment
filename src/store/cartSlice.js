import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.productCount = state.products.length;
    },
    removeProductFromCart: (state, action) => {
      const filterProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = filterProducts;
      state.productCount = filterProducts.length;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;

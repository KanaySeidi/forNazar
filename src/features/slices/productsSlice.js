import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/products";

const productsSlice = createSlice({
  name: "product/slice",
  initialState: {
    data: [],
    status: "default",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "default";
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;

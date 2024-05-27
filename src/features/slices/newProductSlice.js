import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../api/products";

const newProductSlice = createSlice({
  name: "newProduct",
  initialState: {
    data: [],
    status: "default",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "default";
        state.data = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newProductSlice.reducer;

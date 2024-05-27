import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import newProductReducer from "./slices/newProductSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    newProduct: newProductReducer,
  },
});

export default store;

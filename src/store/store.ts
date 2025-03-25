import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/products-slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type StateSchema = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

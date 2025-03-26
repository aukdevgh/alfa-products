import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://dummyjson.com/products?select=title,description,price,discountPercentage,rating,thumbnail,category,tags,brand,sku"
    );
    const data = await response.json();
    return data.products;
  }
);

type ProductsSchema = {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  } as ProductsSchema,

  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { toggleLike, deleteProduct, addProduct } = productsSlice.actions;
export default productsSlice.reducer;

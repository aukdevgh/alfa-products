import { Routes, Route, Navigate } from "react-router";
import { Home } from "../pages/home/home";
import { Products } from "../pages/products/products";
import { Product } from "../pages/product/product";
import { CreateProduct } from "../pages/create-product/create-product";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="create-product" element={<CreateProduct />} />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
};

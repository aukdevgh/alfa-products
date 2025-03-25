import { useSelector } from "react-redux";
import { StateSchema } from "../store";

export const getProducts = () =>
  useSelector((state: StateSchema) => state.products.items);

export const getProductsStatus = () =>
  useSelector((state: StateSchema) => state.products.status);

export const getProductById = (id: number) => {
  const products = getProducts();
  return products.find((product) => product.id === id);
};

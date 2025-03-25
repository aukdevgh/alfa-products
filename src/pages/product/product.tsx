import { useParams } from "react-router";
import { getProductById } from "../../store/products/selectors";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));

  if (!product) {
    return <h1>product not fount</h1>;
  }

  return <h1>product {product.title}</h1>;
};

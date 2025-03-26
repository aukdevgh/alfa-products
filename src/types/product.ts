export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  category: string;
  tags: string[];
  brand: string;
  sku: string;
  liked?: boolean;
};

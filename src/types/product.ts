export type Category = "All" | "Sneakers" | "Apparel" | "Accessories" | "Tech";

export type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  colors: string[];
  accent: string;
};

export type CartLine = { productId: string; quantity: number };
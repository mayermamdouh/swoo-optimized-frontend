export type City = "cairo" | "giza" | "sohag";

export type Cities = {
  [key in City]: string[];
};

export type Product = {
  valueSaved: string;
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  shipping: string;
  stock: boolean;
};

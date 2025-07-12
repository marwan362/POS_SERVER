import { Drink } from "./order";

const drinks: Drink[] = [
  {
    id: "1",
    name: "Espresso",
    sizes: ["Small", "Medium", "Large"],
    prices: { Small: 2.5, Medium: 3.0, Large: 3.5 },
  },
  {
    id: "2",
    name: "Latte",
    sizes: ["Small", "Medium", "Large"],
    prices: { Small: 3.5, Medium: 4.0, Large: 4.5 },
  },
  {
    id: "3",
    name: "Iced Americano",
    sizes: ["Medium", "Large"],
    prices: { Medium: 3.0, Large: 3.5 },
  },
];

export const getDrinks = () => {
  return drinks;
};

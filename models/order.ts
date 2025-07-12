import { v4 as uuidv4 } from "uuid";

export type Drink = {
  id: string;
  name: string;
  sizes: string[];
  prices: Record<string, number>;
};

export interface OrderItem {
  id: string;
  drink: Drink;
  size: string;
  quantity: number;
  price: number;
}

export interface Order {
  orderId: string;
  timestamp: Date;
  items: OrderItem[];
  totalAmount: number;
}

const orderStore: Order[] = [];

export const createOrder = (
  orderData: Omit<Order, "timestamp" | "orderId">
): Order => {
  const newOrder: Order = {
    ...orderData,
    orderId: uuidv4(),
    timestamp: new Date(),
  };
  orderStore.push(newOrder);
  return newOrder;
};

export const getAllOrders = (): Order[] => {
  return [...orderStore];
};

export const clearOrders = (): void => {
  orderStore.length = 0;
};

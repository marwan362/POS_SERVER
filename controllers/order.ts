import { Request, Response } from "express";
import { createOrder, getAllOrders, OrderItem } from "../models/order";

export const createNewOrder = (req: Request, res: Response) => {
  const { items } = req.body;

  const totalAmount = items.reduce((sum: number, item: OrderItem) => {
    return sum + item.price * item.quantity;
  }, 0);

  const order = createOrder({
    items,
    totalAmount,
  });

  res.status(201).json({
    success: true,
    orderId: order.orderId,
    timestamp: order.timestamp,
    totalAmount: order.totalAmount,
  });
};

export const listAllOrders = (_req: Request, res: Response) => {
  const orders = getAllOrders();
  res.status(200).json(orders);
};

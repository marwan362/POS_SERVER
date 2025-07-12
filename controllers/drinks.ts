import { Request, Response } from "express";
import { getDrinks } from "../models/drinks";

export const listAllDrinks = (_req: Request, res: Response) => {
  const orders = getDrinks();
  res.status(200).json(orders);
};

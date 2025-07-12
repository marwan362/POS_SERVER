import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateOrder = [
  body("items").isArray({ min: 1 }),
  body("totalPrice").isNumeric(),
  body("items.*.id").exists(),
  body("items.*.drink").exists(),
  body("items.*.size").exists(),
  body("items.*.price").isNumeric(),
  body("items.*.quantity").isInt({ gt: 0 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid order data" });
    }
    next();
  },
];

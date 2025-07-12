import { Router } from "express";
import { validateOrder } from "../middlewares/validation";
import { createNewOrder, listAllOrders } from "../controllers/order";

const router = Router();

router.post("/", validateOrder, createNewOrder);
router.get("/", listAllOrders);

export default router;

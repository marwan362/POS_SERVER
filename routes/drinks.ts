import { Router } from "express";
import { listAllDrinks } from "../controllers/drinks";

const router = Router();

router.get("/", listAllDrinks);

export default router;

import express from "express";
import bodyParser from "body-parser";
import orderRouter from "../routes/order";
import drinksRouter from "../routes/drinks";
import cors from "cors";
import logger from "../logger";
import routeLogger from "../middlewares/logger";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(routeLogger);

app.use("/orders", orderRouter);
app.use("/drinks", drinksRouter);

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    logger.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

app.listen(port, () => {
  logger.info(`Server running on http://localhost:3000`);
});

import logger from "../logger";

const routeLogger = (req: any, _res: any, next: any) => {
  logger.info(`Incoming ${req.method} request to ${req.path}`);
  next();
};

export default routeLogger;

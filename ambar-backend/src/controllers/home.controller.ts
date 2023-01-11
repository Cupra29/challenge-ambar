import { Request, Response, NextFunction } from "express";
import { HomeService } from "../services";

export const hello = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await HomeService.hello();
    res.status(200).send(result);
    return next();
  } catch (err: any) {
    res.status(500).json(err.message);
    return next();
  }
};

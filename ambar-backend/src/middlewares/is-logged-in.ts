import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function isLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).json({ error: "Acceso denegado" })
      next();
    } else {
      jwt.verify(token, process.env.TOKEN_SECRET || 'secret');
      next(); // continuamos
    }
  } catch (error) {
    res.status(400).json({ error: "token no es válido" });
  }
}

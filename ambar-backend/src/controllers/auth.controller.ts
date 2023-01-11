import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services';

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, fullname } = req.body;
    const result = await AuthService.signup(email, password, fullname, req);
    res.status(201).json(result);
    return next();
  } catch (err: any) {
    res.status(500).json(err.message);
    return next()
  }
};

export const signin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.signin(email, password, req);
    res.status(200).json(result);
    return next();
  } catch (err: any) {
    res.status(500).json(err.message);
    return next()
  }
};

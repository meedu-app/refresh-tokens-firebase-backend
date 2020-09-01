import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../libs/firebase-admin';

declare global {
  namespace Express {
    export interface Request {
      session?: {
        id: string;
        email: string;
        username: string;
      };
    }
  }
}

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.headers;

    if (!token) {
      throw new Error('access denied');
    }
    const session = await verifyToken(token as string);

    req.session = session;

    next();
  } catch (e) {
    res.status(403).send(e.message);
  }
};

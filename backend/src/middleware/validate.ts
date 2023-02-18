import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import CustomError from '../util/customError';

export const validate =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) next(new CustomError(error.message, 400));
      next(error);
    }
  };

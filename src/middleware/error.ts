import { NextFunction, Request, Response } from 'express';

import { ErrorWithStatus } from '@models/error';

// Error Middleware
const ErrorMiddleware = (
  error: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const code = error.code || 500;
  const message = error.message || 'Internal Server Error';
  res.status(code).json({ success: false, message: message, code: code });
};

export default ErrorMiddleware;

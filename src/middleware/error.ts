import { NextFunction, Request, Response } from 'express';

import { ErrorWithStatus } from '@models/error';

import logger from './logger';

// Error Middleware
const ErrorMiddleware = (
  error: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const clientIp = _req.headers['x-forwarded-for'] || _req.socket.remoteAddress;
  const code = error.code || 500;
  const name = error.errorName || 'Error Name';
  const message = error.message || 'Internal Server Error';
  const logMessage = `${message} | From: ${name} | Method: ${_req.method} ${_req.url} | Status: ${code} | IP: ${clientIp} | User Agent: ${_req.headers['user-agent']}`;

  res.status(code).json({ success: false, message: message, code: code });

  if (code >= 500) {
    logger.error({
      message: logMessage,
    });
  } else {
    logger.warn({
      message: logMessage,
    });
  }
};

export default ErrorMiddleware;

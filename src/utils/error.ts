import { ErrorWithStatus } from '@models/error';

// Create a Customized Error Function
const AppError = (errorName: string, statusCode: number, message: string) => {
  const error = new Error(message) as ErrorWithStatus;
  error.code = statusCode;
  error.errorName = errorName;
  return error;
};

export default AppError;

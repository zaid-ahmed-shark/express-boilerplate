import { ErrorWithStatus } from '@models/error';

// Create a Customized Error Function
const AppError = (statusCode: number, message: string) => {
  const error = new Error(message) as ErrorWithStatus;
  error.code = statusCode;
  return error;
};

export default AppError;

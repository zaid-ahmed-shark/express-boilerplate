export interface ErrorWithStatus extends Error {
  code: number;
  errorName: string;
}

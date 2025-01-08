import { createLogger, format, transports } from 'winston';

import DailyRotateFile from 'winston-daily-rotate-file';

import dateFormatter from '@utils/date';

const { combine, timestamp, printf, ms } = format;

// Formatter for logs
const myFormat = printf(({ message, level, timestamp, ms }) => {
  return `[${dateFormatter(timestamp as string)}] ${level.toUpperCase()}: ${message} | Response Time: ${ms}`;
});

const transport: DailyRotateFile = new DailyRotateFile({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  dirname: './logs/',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '1d',
});

const logger = createLogger({
  level: 'debug',
  format: combine(timestamp(), ms(), myFormat),
  transports: [new transports.Console(), transport],
});

export default logger;

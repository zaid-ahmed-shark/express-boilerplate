import path from 'path';

import { Express } from 'express';

import morgan from 'morgan';

import { createStream } from 'rotating-file-stream';

// configure a directory for rotating logs
const logDirectory = path.join(__dirname, '../../logs');

// create a rotating write stream
const accessLogStream = createStream('../access.log', {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  path: logDirectory, // log directory
});

const SetupLogging = (app: Express) => {
  app.use(
    morgan(
      'Remote Address - :remote-addr User - :remote-user Date - [:date[clf]] ":method :url HTTP/:http-version" Req-Header - :req[header] Status Code - :status Res-Content-Type - :res[content-type] Res-Content-Length - :res[content-length] Referrer - ":referrer" " User Agent - :user-agent" ResTime - :response-time ms TTime - :total-time ms',
      {
        stream: accessLogStream,
      },
    ),
  );
};

export default SetupLogging;

// app.use(morgan('combined', { stream: accessLogStream }));

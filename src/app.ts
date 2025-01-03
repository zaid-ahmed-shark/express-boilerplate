import express, { Express } from 'express';

import dotenv from 'dotenv';

import ErrorMiddleware from '@middleware/error';

import todosRoutes from '@routes/todos';

dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();

// This is the body parser middleware
app.use(express.json());

// This is the route middleware
app.use('/api/', todosRoutes);

// This is the error handler middleware
app.use(ErrorMiddleware);

// Start the server
app.listen(port);

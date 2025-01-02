import { NextFunction, Request, Response } from 'express';
import TodoService from '@services/todos';
import { RequestBody, RequestParams } from '@models/todos';

// Get All TODOS
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await TodoService.findAll();
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    next(error);
  }
};

// Get SOLO TODO
export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todo = await TodoService.findOne(req.params as RequestParams);
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};

// Create TODO
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todo = await TodoService.create(req.body as RequestBody);
    res.status(201).json({ success: true, message: 'Added Todo', data: todo });
  } catch (error) {
    next(error);
  }
};

// Update TODO
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await TodoService.update(
      req.params as RequestParams,
      req.body as RequestBody,
    );
    res
      .status(200)
      .json({ success: true, message: 'Updated todo', data: todos });
  } catch (error) {
    next(error);
  }
};

// Delete TODO
export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await TodoService.remove(req.params as RequestParams);
    res
      .status(200)
      .json({ success: true, message: 'Deleted todo', data: todos });
  } catch (error) {
    next(error);
  }
};

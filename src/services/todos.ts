import { RequestBody, RequestParams, Todo } from '@models/todos';
import AppError from '@utils/error';

let todos: Todo[] = [];

const create = async (todoBody: RequestBody) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    title: todoBody.title,
  };

  todos.push(newTodo);
  return { newTodo, todos: todos };
};

const findAll = async () => {
  return { todos: todos };
};

const findOne = async (params: RequestParams) => {
  const todo = todos.find((todoItem) => todoItem.id === params.id);
  // if doesn't exist, throw an error
  if (!todo) {
    throw AppError(401, 'Todo not found');
  }

  return todo;
};

const update = async (params: RequestParams, body: RequestBody) => {
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === params.id);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, title: body.title };
    return todos;
  }
  throw AppError(401, 'Todo not found');
};

const remove = async (params: RequestParams) => {
  const todo = todos.find((todoItem) => todoItem.id === params.id);
  // if doesn't exist, throw an error
  if (!todo) {
    throw AppError(401, 'Todo not found');
  }
  todos = todos.filter((todoItem) => todoItem.id !== params.id);
  return todos;
};

const TodoService = { create, findAll, findOne, update, remove };

export default TodoService;

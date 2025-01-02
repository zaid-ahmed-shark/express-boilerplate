export type RequestBody = { title: string };
export type RequestParams = { id: string };

export interface Todo extends RequestBody {
  id: string;
}

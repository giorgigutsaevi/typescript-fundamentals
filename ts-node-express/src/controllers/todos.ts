// We can import Request, Response and NextFunction named imports like we did in routes, but there's another way as well.
// import {Request, Response, NextFunction} from 'express'
// To avoid typing more, we can simply import 'RequestHandler' from express like so:
import { RequestHandler } from "express";
// And then we can tell our createTodo function, that it will be a 'RequestHandler' Function
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  // Our text of a todo will come from a req.body
	// TS will not know that req.body will have a string attached to it
	// So we can type-cast our req.body as an object that will have an object with a text property as a string type
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

	TODOS.push(newTodo);

	// Now that we have our todo created above, we have to send it as a JSON
	res.status(201).json({message: "Created the todo", createdTodo: newTodo})
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
// And then we can tell our createTodo function, that it will be a 'RequestHandler' Function
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    // Our text of a todo will come from a req.body
    // TS will not know that req.body will have a string attached to it
    // So we can type-cast our req.body as an object that will have an object with a text property as a string type
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    // Now that we have our todo created above, we have to send it as a JSON
    res.status(201).json({ message: "Created the todo", createdTodo: newTodo });
};
exports.createTodo = createTodo;

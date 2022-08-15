"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
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
//! Adding a function to get/fetch ALL todos available to us (this is a really simple example of course, a real life example will be connected to a DB)
// Again using a RequestHandler, so we dont have to add types individually to all params below
const getTodos = (req, res, next) => {
    // Simply sending a json of our TODOS array above.
    res.status(201).json({ todos: TODOS });
};
exports.getTodos = getTodos;
//! Adding a function to update a todo
const updateTodo = (req, res, next) => {
    // extracting id from the dynamic variable we get from our routes, referring to -> /:id
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id == todoId);
    // If todo is not found, throw an error
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    // Send an updated todo as JSON
    res.json({ message: "Updated", updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
//! Adding a function to delete a todo
const deleteTodo = (req, res, next) => {
    // extracting id from the dynamic variable we get from our routes, referring to -> /:id
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id == todoId);
    // If todo is not found, throw an error
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "todo Deleted!" });
};
exports.deleteTodo = deleteTodo;

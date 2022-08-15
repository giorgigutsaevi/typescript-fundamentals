"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Building a CRUD (todo) Rest API
const express_1 = require("express"); // importing Router function from express
// Now that we have our logic inside our controllers, we can import it
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
// A route to ADD a new todo with a createTodo controller logic
router.post("/", todos_1.createTodo);
// A route to get ALL todos
router.get("/", todos_1.getTodos);
// A route to UPDATE a todo
router.patch("/:id", todos_1.updateTodo);
// A route to DELETE a todo
router.delete("/:id", todos_1.deleteTodo);
exports.default = router;

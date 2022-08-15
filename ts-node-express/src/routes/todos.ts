//* Building a CRUD (todo) Rest API
import { Router } from "express"; // importing Router function from express

// Now that we have our logic inside our controllers, we can import it
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

// A route to ADD a new todo with a createTodo controller logic
router.post("/", createTodo);

// A route to get ALL todos
router.get("/", getTodos);

// A route to UPDATE a todo
router.patch("/:id", updateTodo);

// A route to DELETE a todo
router.delete("/:id", deleteTodo);

export default router;

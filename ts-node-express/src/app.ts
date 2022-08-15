// root entry point of our project
// importing express library and other useful named imports
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

// importing my todo routes
import todoRoutes from "./routes/todos";

const app = express();

// Setting up a very important middleware to PARSE the bodies of incoming requests
app.use(json());

// Setting up the middleware. Forwarding all requests that start with /todos to our todoRoutes.
app.use("/todos", todoRoutes);

// Setting up an additional middleware here for error handling

/*
	Since we introduce specific parameters, because we are using TS, it's important we dissect the TYPES of these params.
	We can either import the following types above (Error, Request, Response, NextFunction), or:
	We can use the following syntax -> err: express.Error (without the need to import named imports on top of the file)
*/

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);

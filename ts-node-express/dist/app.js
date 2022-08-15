"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// root entry point of our project
// importing express library and other useful named imports
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
// importing my todo routes
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
// Setting up a very important middleware to PARSE the bodies of incoming requests
app.use((0, body_parser_1.json)());
// Setting up the middleware. Forwarding all requests that start with /todos to our todoRoutes.
app.use("/todos", todos_1.default);
// Setting up an additional middleware here for error handling
/*
    Since we introduce specific parameters, because we are using TS, it's important we dissect the TYPES of these params.
    We can either import the following types above (Error, Request, Response, NextFunction), or:
    We can use the following syntax -> err: express.Error (without the need to import named imports on top of the file)
*/
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);

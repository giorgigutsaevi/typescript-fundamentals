# Executing TypeScript with Node.js

👉 It’s important to understand that Node **DOES NOT** understand TypeScript. So, either we have to compile it before execution or install a 3rd party npm package like `**ts-node**`. 

## Setting up a project directory

To correctly set up our node project to use typescript, we need to lay in some groundwork first. They are easy steps, but need to be followed to avoid any errors down the line.

**Step 1.** 

`npm init -y` 👉 Create a package.json file

`tsc —init` 👉 Create a tsconfig.json file

Inside the tscinfig.json file, we need to make few changes. 

- Set up the `target` for “es2016” or above.
- Uncomment the line → `“moduleResolution”: "node"`
- Uncomment `“outDir”:` and set it to `“./dist”`
- `“rootDir”: “./src”` needs to be indicated as well.
    
    💊 **Outdir and rootDir separate our dedicated files to .ts and .js extensions.** 
    
- Now we are ready to add whatever 3rd party packages we want to like: `express`, `nodemon`, `body-parser`, `cookie-parser`, etc.

# Working with Types (in Node + Express apps)

To fully make TypeScript work with **node** and **express**, we have to additionally install @types for our express and node. Because TypeScript will not be aware of general node functions.

1. Run the following command: `npm i @types/node —save-dev`
2. Also run this command, so TS understand express related commands
    
    `npm i @types/express —save-dev`
    

At this point, since both types have been installed, we have to change the way we import express inside our project.

```tsx
~~const express = require("express")~~ // we don't need this type of common.js import
import express from 'express' // import express like this (ES6 style)

const app = express(); // now, if we hover over app, we'll see it's of **type Express**

app.listen(3000)
```

👉 Start compiling by running `tsc -w` ← This is so TS compiles to JS

👉 Start the express server by opening a new Terminal tab and running **`nodemon dist/app.js`** command.

# Adding middlewares & types

Because TS is used in a node + express app, we have to be careful about how we write our code. 

Remember, TS uses **types**, so we have to make sure we use that when we setup express **middlewares**.

```tsx
// root entry point of our project

// importing express library and other useful named imports
import express, { Request, Response, NextFunction } from "express";

// importing my todo routes
import todoRoutes from "./routes/todos";

const app = express();

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
```

# Working with controllers & parsing Request bodies

Now that we register some routes for our CRUD node + express application, let’s add some logic to those routes. Like always, let’s add **controllers** file to our project, to split our code into `controllers` and `routes`.

We can import `Request`, `Response` and `NextFunction` named imports like we did in our routes folder, but it can be cumbersome and verbose to do it ALL THE TIME. There’s another consise way. So instead of doing below:

```tsx
~~import {Request, Response, NextFunction} from 'express'~~

```

We can import a **`RequestHandler`** from express:

```tsx
import { RequestHandler } from "express"
// And then we can tell our createTodo function, that it will be a 'RequestHandler' Function

export const createTodo : RequestHandler = (req, res, next) => {
	
}
```

This way, TS knows that `createTodo` function, will have `req`, `res` and `next` as params.
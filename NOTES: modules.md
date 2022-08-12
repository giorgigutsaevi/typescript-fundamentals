# TS Modules

In TypeScript, we have an option to organise our code. 

1. There is a pre-ES6 import/export modules option - called `namespaces`, which has a different approach of organising code. Again this is somewhat legacy approach now. 
2. And the second option is the ES6, import exports.

# TypeScript `namespaces`

Let’s say we have a file called utils.ts, which holds some utility functions. For simplicity’s sake, we will create two simple functions. Let’s make sure to export them as well. 

```tsx
// in utils.ts
export function add(x: number, y: number): number {
	return x + y;
}

export function sample<T>(arr: T[]): T {
   const idx = Math.floor(Math.random() * arr.length);
   return arr[idx];
}
```

Next step is to wrap them up in a namespace. For that we use the keyword **`namespace`** and make up a name. We’ll call this namespace - **`App`**. 

```tsx
// in utils.ts
namespace App {
  export function add(x: number, y: number): number {
    return x + y;
  }

  export function sample<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }
}
```

Now, wherever we want to use these utility functions, we have to import them in that particular file. Let’s say, we want to use them in an `app.ts` file.

To “import” these utility functions, we use a special syntax on top of the file.

The special syntax → `/// <reference path=”<file_destination>” />`

And we wrap the lines where we want to use our utility functions, in a **`namespace`** of similar title - **`App`**.

```tsx
// inside app.ts

/// <reference path="utils.ts"/> 

namespace App {
  console.log(add(42, 42));
}
```

But, this is not yet done, we now have to bundle all our `.ts` files into a single file, to tell JavaScript that we are using namespaces (because JS has no idea what namespaces are). To do that, we go to our friendly `tsconfig.json` file and change:

```tsx
"module": "amd" /* Specify what module code is generated. */,
"outFile": "./dist/bundle.js", // include whatever we want the bundle to be namded
```

We run `tsc` command to compile again, and inside our **`dist`** sub-directory, we’ll see `**bundle.js**` appear.

# TypeScript ES6 import/export

To make use of modern ES6 import & export modules in TypeScript, we have to make some slight changes inside our `tsconfig.json` file.

Step 1: If the `outFile` is uncommented, make sure we **comment that in**, we don’t need that option on.

Step 2: Within our modules sub-option, we have to make sure we change `“module”: “commonjs”` to → `**“es2015”**`

```tsx
/* Modules */
    "module": "es2015" /* Specify what module code is generated. */,
```

Step 3: Just in case, make sure our target is set on `es2016` or at least later ones. 

```tsx
"target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
```

Step 4: One final details is to make some changes inside our `index.html` file. We have to make sure to add `type=”module”` attribute to our src element.

```tsx
// inside index.html
<script type="module" src="dist/app.js"></script>
```

👆 Once all the above is followed, then we can use imports and exports as we do in React or vanilla JS projects.

<aside>
💊 **Always remember to import with a `.js` extension!**

</aside>

```tsx
import { Greetable, add } from "./utils/utils.js";

// make sure to note that we have js and NOT .ts extensions in the import.
```
# 1.  What is TypeScript?

- TS is a JS **superset**, which basically means that it’s a programming language **built on top** of JavaScript.
- TypeScript is a powerful language but is also a **tool** that converts TypeScript code → JavaScript.
- TypeScript adds types, which can help you identify **errors** in the development process. So it gives you an extra error-checking.

# 2. Using Basic TS

```tsx
const input1 = document.getElementById("num1")! as HTMLInputElement;
```

- `**!**` the exclamation symbol here means that this element will never yield `**null`,** meaning that that getElementById will always find the HTML element with that particular #id.
- **`as HTMLInputElement`** signifies what we call **type casting**. Type casting basically means that we are letting TS know what kind of element this will be.

Knowing the above, we can know deduce that if we have a button, that we are query selecting, we can use the same logic as above.

```tsx
const button = document.querySelector("button")! as HTMLButtonElement;
```

- **`!`** 👉 `querySelector` will never return `null`, because id `button` exists, and we are **type casting** it as a `HTMLButtonElement`

# 3. TS Overview

TypeScript adds the following to a JavaScript language, that’s why it’s called a superset. 

1. **Types!** 
2. Next-gen JavaScript Features (compiled down for older browsers)
3. Adding **interfaces** and **generics** (Non-javascript features)
4. Meta-Programming features like **Decorators**
5. Rich configuration options
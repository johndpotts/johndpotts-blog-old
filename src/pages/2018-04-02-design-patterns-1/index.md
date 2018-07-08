---
title: "Design Patterns 1 the Module Pattern"
date: "2018-04-02T22:12:03.285Z"
path: "/2018-04-02-design-patterns-1/"
featuredImage: "./building-blocks.jpg"
---

![Writing](./building-blocks.jpg)

# The Module Pattern
Back in the 80's there was a popular sitcom called 'Cheers'; the theme song had a warm, familiar line -
### 'Where everybody knows your name...'

Sounds nice, right? Well, sure, as a human it's nice to be where everyone knows your name... but if the place you're referring
to is the global namespace in your code, that warm fuzzy feelng can quickly turn into a mess of conflicting variable names
and all around badness.

Enter... the module pattern!

The module pattern, often presented as an *Immediately-Invoked Function Expression* (IIFE) in javascript,
is a great way to keep your code neat and tidy- and make sure you're not making things public that shouldn't be.
 Here's what it looks like:

```js
(function() {
    // Oh look, I'm hanging out inside a module
    // How wonderful
}());
 ```

 Or, with an ES6 arrow function,
 ```js
 (() => {
  // All of the mapping, reducing and filtering. ES6 FTW.
})();
```

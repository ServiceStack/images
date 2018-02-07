# images

Collection of free images and resources for Websites and Apps served from GitHub's CDN.

The [heroes.js](https://github.com/ServiceStack/images/blob/master/heroes.js) module returns different URLs to 2560x1000 [/hero](https://github.com/ServiceStack/images/tree/master/hero) images ideal for usage in hero backgrounds.

> Live Example: [/heroes](https://servicestack.github.io/images/heroes)

# usage

From web page:

```html
<script src="https://servicestack.github.io/images/heroes.js" />

<script>document.write(`<img src="${heroes.random()}">`);</script>
```

From a npm-based Web App:

    $ npm install @servicestack/images

Import using ES6 modules or TypeScript:

```js
import { heroes } from "@servicestack/images";
```

### React Example

```js
const Hero = <img src={heroes.random()} />;
```

### Vue Example

```html
<template>
  <img :src="heroes.daily()">
</template>

<script>
import { heroes } from "@servicestack/images";

export default {
  methods: {
    heroes
  }
}
</script>
```

### dependency-free

[heroes.js](https://github.com/ServiceStack/images/blob/master/heroes.js) doesn't have any dependencies so can copied and used locally:

    $ curl https://servicestack.github.io/images/heroes.js -o heroes.js

Where it can be referenced as a relative module:

```js
import heroes from "./heroes";

console.log(heroes.random());
```
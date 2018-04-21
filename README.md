# images

A growing hand-picked curated collection of beautiful free images from [unsplash.com](https://unsplash.com) that's an easy drop into any Website served from GitHub's CDN.

The [heroes.js](https://github.com/ServiceStack/images/blob/master/heroes.js) module returns different URLs to 2560x1000 [/hero](https://github.com/ServiceStack/images/tree/master/hero) images ideal for usage in hero backgrounds.

> Live Example: [/heroes](https://servicestack.github.io/images/heroes)

# api

The different API's lets you control which hero to get and the frequency it changes:

```js
heroes.random()          // a random hero each time
heroes.daily()           // the same hero for the day
heroes.hourly()          // the same hero for the hour
heroes.static('foo')     // the same hero for this string constant
heroes.static('foo',10)  // the same hero + 10 for this string constant
heroes.get(1)            // the first hero
heroes.get(1000000)      // the hero at mod length 1000000

heroes.images            // the array of hero image names
heroes.baseUrl           //= https://servicestack.github.io/images/ 
```

# usage

From web page:

```html
<script src="https://servicestack.github.io/images/heroes.js" />

<script>document.write(`<img src="${heroes.random()}">`)</script>
```

From a npm-based Web App:

    $ npm install @servicestack/images

Import using ES6 modules or TypeScript:

```js
import { heroes } from "@servicestack/images";
```

### React Example

```jsx
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

As [heroes.js](https://github.com/ServiceStack/images/blob/master/heroes.js) doesn't have any dependencies it can also be copied and used locally:

    $ curl https://servicestack.github.io/images/heroes.js -o heroes.js

Where it can be referenced as a relative module:

```js
import heroes from "./heroes";

console.log(heroes.random());
```

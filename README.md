# images

Collection of free images and resources for Websites and Apps.

> Live Demo: [/heroes](https://servicestack.github.io/images/heroes)

# usage

From web page:

```html
<script src="https://servicestack.github.io/images/heroes.js" />

<script>document.write(`<img src="${heroes.random()}">`);</script>
```

From a npm-based Web App:

    $ npm install @servicestack/images

### React Example

```js
import { heroes } from "@servicestack/images";

const Hero = <img src={heroes.random()} />;
```

### Vue Example

```html
<template>
    <img :src="heroes.random()">
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

As [heroes.js](https://github.com/ServiceStack/images/blob/master/heroes.js) doesn't have any dependencies it can 

$ curl https://servicestack.github.io/images/heroes.js -o heroes.js

Where it can then be referenced as a relative dependency:

```js
import heroes from "./heroes";

console.log(heroes.random());
```
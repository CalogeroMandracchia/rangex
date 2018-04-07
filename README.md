# rangex

Python3 range made with ES6 generator!

## Installation

```sh
$ npm install --save rangex
```

## API

```js
const range = require('rangex')
```

### range([start], stop[, step])

Range is a generator - it produces values on demand, not all up front.


<!-- eslint-disable no-undef -->

```js
range(5);
// [ 0, 1, 2, 3, 4 ]

range(-2, 2);
// [ -2, -1, 0, 1 ]

range(-8, -2, 2);
// [ -8, -6, -4 ]

//we have NO LIMITS!
range(89347896347693469346346345685558585034938433, 2, -2).next()
// { value: 8.934789634769348e+43, done: false }
```

### How to use it:

```js
//for-of loop
for(const num of range(3))
{
    console.log(num);
}
// 0
// 1
// 2

//spread operator (...)
const arr = [...range(5, 10, 2)];
// [ 5, 7, 9 ]

//destructuring
const [a, b, c] = range(-100, -95, 2);
// a = -100, b = -98, c = -96

//calling only the next value
range(5, 15, 3).next().value
// 5

//use map and destructuring
[...range(3)].map( num => num**2)
// [ 0, 1, 4 ]
```

#### Requirements

[Node.js](http://nodejs.org/) 6.3.1+

#### Test
```sh
$ npm test
```

#### more about generators

[MDN]

[exploringjs]

## License

[MIT](LICENSE)

[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
[exploringjs]: http://exploringjs.com/es6/ch_generators.html
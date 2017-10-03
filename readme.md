# remove-min-max

> Remove the minimum and the maximum from an array of numbers

[![Build Status](https://travis-ci.org/icyflame/remove-min-max.svg?branch=master)](https://travis-ci.org/icyflame/remove-min-max)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save remove-min-max
```


## Usage

```js
var removeMinMax = require('remove-min-max');

removeMinMax([1, 2, 3, 5, 6, 9, 4, 7, 8]);
//=> [2, 3, 4, 5, 6, 7, 8]
```


## API

### removeMinMax(input)

#### input

*Required*  
Type: `Array`

Array of numbers from which to remove minimum and maximum

**This module will return an array _sorted in ascending order_**

**Note:** v1.0.0 of this module used to mutate the supplied argument. v2.0.0
onwards, that doesn't happen. i.e. the supplied argument is NOT mutated


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)

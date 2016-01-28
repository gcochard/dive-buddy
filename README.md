# dive-buddy  [![Build Status](https://travis-ci.org/gcochard/dive-buddy.svg?branch=master)](https://travis-ci.org/gcochard/dive-buddy) [![Coverage Status](https://coveralls.io/repos/github/gcochard/dive-buddy/badge.svg?branch=master)](https://coveralls.io/github/gcochard/dive-buddy?branch=master) [![NPM](https://nodei.co/npm/dive-buddy.png?mini=true)](https://nodei.co/npm/dive-buddy/)

`dive-buddy` is a module to help you to dive down into deep objects and retrieve properties. You pass the object, and the path to the property, and if there is any null object reference along the way, dive-buddy safely returns null or a default value which you pass.

## Installation

``` bash
  $ npm install --save dive-buddy
```

## Usage

``` js
var diveBuddy = require('dive-buddy');

var obj = {
    a: {
        b: {
            c: {
                d: {
                    someProperty: 'value'
                }
            }
        }
    }
}

var retrieved = diveBuddy(obj,'a.b.c.d.e.f.g','default');
console.log(retrieved);
// => 'default'

retrieved = diveBuddy(obj,['a','b','c','d','someProperty'],'default');
console.log(retrieved);
// => 'value'
```

## API

dive-buddy exports one function, which accepts an object to traverse, a string or array of properties, and an optional default value. It will traverse the object until it either reaches the ending property, or encounters a null property -- in which case it will return the default value, or null if one was not provided.


## Author

[Greg Cochard][0]

[0]: https://github.com/gcochard

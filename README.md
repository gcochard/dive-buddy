# dive-buddy  [![Build Status](https://travis-ci.org/gcochard/dive-buddy.svg?branch=master)](https://travis-ci.org/gcochard/dive-buddy) [![Coverage Status](https://coveralls.io/repos/github/gcochard/dive-buddy/badge.svg?branch=master)](https://coveralls.io/github/gcochard/dive-buddy?branch=master) [![NPM](https://nodei.co/npm/dive-buddy.png?mini=true)](https://nodei.co/npm/dive-buddy/)

`dive-buddy` is a module to help you to dive down into deep objects and retrieve properties. You pass the object, and the path to the property, and if there is any null object reference along the way, dive-buddy safely returns null or a default value which you pass.

## Inspiration
Coffeescript (ugh yes, that) and ruby have the existential operator `.?` which allows you to safely traverse object properties, deep into the object. That functionality is easy to replicate, but this module reduces the boilerplate cruft needed to do it.

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
            },
            e: function(){
                return {f:'yay functions'};
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

retrieved = diveBuddy(obj,'a.b.c.e().f');
console.log(retrieved);
// => 'yay functions'
```

Compare that to the following:

``` js
var obj = {
    a: {
        b: {
            c: {
                d: {
                    someProperty: 'value'
                }
            },
            e: function(){
                return {f: 'yay functions'};
            }
        }
    }
}
var retrieved = ((((((obj.a||{}).b||{}).c||{}).d||{}).e||{}).f||{}).g||'default'
console.log(retrieved);
// => 'default'

retrieved = ((((obj.a||{}).b||{}).c||{}).d||{}).someProperty||'default'
console.log(retrieved);
// => 'value'

retrieved = ((((obj.a||{}).b||{}).c||{}).e||function(){return {f:'yay functions'};}).f||'default'
console.log(retrieved);
// => 'yay functions'
```

## API

dive-buddy exports one function, which accepts an object to traverse, a string or array of properties, and an optional default value. It will traverse the object until it either reaches the ending property, or encounters a null property -- in which case it will return the default value, or null if one was not provided. If the current property includes a `()` at the end, it will attempt to call that property as a function, and use the result for the rest of the dive.


## Contributions

Contributions are welcome, please provide a PR with changes and tests reflecting those changes. Please do not reduce code coverage for unjustified reasons, as those PRs will not be accepted. If you have an issue with the module or its documentation, please file an issue and I will do my best to address it.

## Author

[Greg Cochard][0]

[0]: https://github.com/gcochard

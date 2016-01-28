var diveBuddy = require('../');
var assert = require('assert');

describe('diveBuddy',function(){
    it('should work with string path',function(){
        assert.equal(diveBuddy({a:{b:{c:{d:'heeey'}}}},'a.b.c.d'),'heeey');
    });
    it('should work with array path',function(){
        assert.equal(diveBuddy({a:{b:{c:{d:'heeey'}}}},['a','b','c','d']),'heeey');
    });
    it('should show the default return value if no value found',function(){
        assert.equal(diveBuddy({a:{b:{c:''}}},['a','b','c','d'],'heeey'),'heeey');
    });
    it('should not show the default return value if falsey value found',function(){
        assert.equal(diveBuddy({a:{b:{c:{d:''}}}},['a','b','c','d'],'heeey'),'');
    });
    it('should short-circuit to the default return value if path doesnt exist',function(){
        assert.equal(diveBuddy({a:{b:{c:{d:''}}}},['a','b','c','d','e','f'],false),false);
    });
});

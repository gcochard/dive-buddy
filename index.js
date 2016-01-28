(function (root, factory) {
    /*istanbul ignore next -- UMD loader boilerplate*/
    if (typeof define === 'function' && define.amd) {
        define(['dive-buddy'], function () {
            return (root.diveBuddy = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.diveBuddy = factory();
    }
}(this, function () {
    return function safeDive(obj, path, def){
        var ret = obj, lastprop;
        if(typeof path === 'string'){
            path = path.split('.');
        }
        lastprop = path.pop();
        for(var i=0,ii=path.length;i<ii;i++){
            if(!ret.hasOwnProperty([path[i]])){
                return def;
            }
            ret = ret[path[i]] || {};
        }
        if(ret.hasOwnProperty(lastprop)){
            return ret[lastprop];
        }
        return def;
    }
}));

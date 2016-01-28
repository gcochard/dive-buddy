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
    return function safeDive(obj, path, safetyStop){
        var ret = obj, lastprop;
        if(typeof path === 'string'){
            path = path.split('.');
        }
        lastprop = path.pop();
        for(var i=0,ii=path.length;i<ii;i++){
            var prop = path[i], idx = prop.length, func = false;
            if((idx = prop.indexOf('()'))!==-1){
                prop = prop.slice(0,idx);
                func = true;
            }
            if(!ret.hasOwnProperty([prop])){
                return safetyStop;
            }
            if(func){
                ret = typeof ret[prop] === 'function' ? ret[prop] : function(){return{};};
                ret = ret();
            } else {
                ret = ret[prop] || {};
            }
        }
        if(ret.hasOwnProperty(lastprop)){
            return ret[lastprop];
        }
        return safetyStop;
    }
}));

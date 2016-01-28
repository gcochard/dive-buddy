/**
 * Takes an object, and drills down into the path,
 * returning the property requested
 *
 * @param obj - The object to dive
 * @param path - The path into the object
 * @param def - The default value to return
 */
function safeDive(obj, path, def){
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

module.exports = safeDive;

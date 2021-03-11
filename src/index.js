
exports.min = function min (array) {
    const arrMin = Math.min.apply(null, array);
    if(!array || array.length === 0) {
        return 0;    
    }
    else {
        return arrMin;
    };
}

exports.max = function max (array) {
    const arrMax = Math.max.apply(null, array);
    if(!array || array.length === 0) {
        return 0;
    }
    else {
        return arrMax;
    };
}

exports.avg = function avg (array) {    
    if(!array || array.length === 0) {
        return 0 
    }
    else {
        return array.reduce((sum, current) => sum + current, 0) / array.length;
    };
}

function percentile(array, p) {
    arr = Object.assign([], array);
    arr.sort();
    if (arr.length === 0) {
return 0;
}
    if (typeof p !== 'number') {
 throw new TypeError('p must be a number');
}
    if (p <= 0) {
 return arr[0];
}
    if (p >= 1) {
return arr[arr.length - 1];
}

    let index = arr.length * p,
        lower = Math.floor(index),
        upper = lower + 1,
        weight = index % 1;

    if (upper >= arr.length) {
return arr[lower];
}

return arr[lower] * (1 - weight) + arr[upper] * weight;
}

module.exports = percentile;

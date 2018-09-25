const doubler = num => num * 2;

const map = (arr, func) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

const filter = (arr, func) => {
    let filtered = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) filtered.push(arr[i]);
    }
    return filtered;
}

const contains = (collection, val) => {

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] == val) return true;
        }
        return false;
    } else {
        for (let key in collection) {
            if (collection[key] == val) return true;
        }
        return false;
    }
}

const countWords = str => str.split(' ').length;

function reduce(collection, start, func) {
    for (let i = 0; i < collection.length; i++) {
        start = func(start, collection[i]);
    }
    return start;
}

const countWordsInReduce = (start, val) => {
    return start += countWords(val);
}

const sum = arr => reduce(arr, 0, (a, b) => a + b);

const every = (arr, func) => reduce(arr, true, (start, current) => start && func(current));


const any = (arr, func) => reduce(arr, false, (start, current) => start || func(current));
function factorialIterative(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
}


function factorial(num) {
    if (num == 0) return 1;
    else return num * factorial(--num);
}

function fib(num) {
    if (num <= 1) return 1;
    else return fib(num - 1) + fib(num - 2);
}

function type(val) {
    let actual = Object.prototype.toString.call(val).slice(8, -1);
    if (actual == 'Undefined') return 'Undefined';
    else if (actual == 'Null') return 'Null';
    else if (actual == 'Boolean') return 'Boolean';
    else if (actual == 'Number') return 'Number';
    else if (actual == 'String') return 'String';
    else if (actual == 'Function') return 'Function';
    else if (actual == 'Array') return 'Array';
    else if (actual == 'Object') return 'Object';
}

function stringify(elem) {
    let actual = type(elem);
    if (actual == 'Array') {
        var result = elem.map(e => stringify(e));

        return "[" + result.join(',') + "]";
    } else if (actual == 'Object') {
        var key = Object.keys(elem);

        var result = key.map(k => {
            var val = stringify(elem[k]);
            return '"' + k + '": ' + val;
        });

        return "{" + result.join(',') + "}";

    } else if (actual == 'String') {
        return '"' + 'abc' + '"';
    } else return '' + elem;
}

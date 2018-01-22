// the wrapper function Inverter() will return a logical NOT on inner function's return value
function Inverter(f) {
    return function(arg) {
        return ! f(arg);
    }
}
console.log(Inverter(Boolean)(1));

// good technique for wrapping functions with side effects and not touching the original function
// from http://blakeembrey.com/articles/2014/01/wrapping-javascript-functions/
// before() allows a side effect function to be invoked prior to executing the wrapped function
var before = function (before, fn) {
    return function () {
        before.apply(this, arguments);
        return fn.apply(this, arguments);
    };
};

function add(a, b) {
    return a+b;
}

function log() {
    console.log(arguments[2]);
}

// logs a message prior to calling add()
var loggedAdd = before(log, add);
console.log(loggedAdd(3, 4, "Adding numbers"));


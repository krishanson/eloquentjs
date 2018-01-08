// function that does a deep comparison of two objects
function deepEqual(x1, x2) {
    var numPropsInX1 = 0;
    var numPropsInX2 = 0;

    if ((typeof x1 == 'object' && x1 != null) && (typeof x2 == 'object' && x2 != null)) {
        for (var p in x1) {
            numPropsInX1++;
        }
        for (var p in x2) {
            numPropsInX2++;
        }
        if (numPropsInX1 != numPropsInX2)
            return false;
        
        for (var p in x1) {
            if (!(p in x2))
                return false;
            if (! deepEqual(x1[p], x2[p]))
                return false;
        }

        return true;
    }
    else
        return x1 === x2;
}

// test cases for deepEqual()
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({a: 1}, {b: 1}));
// → false
console.log(deepEqual({a: {}}, {a: {}}));
// → true
console.log(deepEqual({}, {a: {}}));
// → false
console.log(deepEqual({a: {a: {b: {}}}}, {a: {a: {b: {}}}}));
// → true
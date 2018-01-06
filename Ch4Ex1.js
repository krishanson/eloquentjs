function range(start, end, step) {
    // return array from start to end, inclusive, in step increments
    // supports both positive and negative step values
    // start greater than end implies negative step
    // default step value is 1 or -1
    var arr = [];

    if (start <= end) {
        // handle positive increments
        if (step == undefined)
            step = 1;
        if (step > 0) {
            for (var i = start; i <= end; i += step)
                arr.push(i);
        }
    }
    else {
        // handle negative increments
        if (step == undefined)
            step = -1;
        if (step < 0) {
            for (var i = start; i >= end; i += step)
                arr.push(i);
        }    
    }

    return arr;
}

function sum(arr) {
    // return sum of array of numbers
    // handles non-numeric array values by returning undefined
    var result = 0;

    while (arr.length > 0) {
        var value = arr.shift();
        if (typeof value !== "number")
            return undefined;
        result += value;
    }

    return result;
}

// range() test cases
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(1, 10, 4));
// → [1, 5, 9]
console.log(range(-5, -1, 2));
// → [-5, -3, -1]
console.log(range(1, 10, -1));
// → []

console.log(range(10, 1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2));
// → [10, 8, 6, 4, 2]
console.log(range(10, 1, -4));
// → [10, 6, 2]
console.log(range(-1, -5, -2));
// → [-1, -3, -5]
console.log(range(10, 1, 1));
// → []

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

//sum() test cases
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
// → 55
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(-1, 1)));
// → 0
console.log(sum(["a", "b", "c"]));
// → undefined

/*  Bonus version found on StackOverflow/jsFiddle
    http://jsfiddle.net/ZaZAZ/
    This version handles character arrays as well as numeric arrays
    A minor difference is that a specified step value must always be a positive value, and
    then start/end determine whether that step increments or decrements
 */

var range2 = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}

console.log(range2("A", "Z", 1));
console.log(range2("Z", "A", 1));
console.log(range2("A", "Z", 3));


console.log(range2(0, 25, 1));

console.log(range2(0, 25, 5));
console.log(range2(20, 5, 5));

// range test cases from above applied to range2()
console.log(range2(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range2(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range2(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range2(1, 10, 4));
// → [1, 5, 9]
console.log(range2(-5, -1, 2));
// → [-5, -3, -1]
console.log(range2(1, 10, -1));
// → []

console.log(range2(10, 1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range2(10, 1, 1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range2(10, 1, 2));
// → [10, 8, 6, 4, 2]
console.log(range2(10, 1, 4));
// → [10, 6, 2]
console.log(range2(-1, -5, 2));
// → [-1, -3, -5]
console.log(range2(10, 1, 1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(range2(5, 2, 1));
// → [5, 4, 3, 2]

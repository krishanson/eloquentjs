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
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
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
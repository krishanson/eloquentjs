
// builds a "list" data structure (as defined in Ch4Ex3) from a passed in array
function arrayToList(arr) {
    var list = null;
    var newEntry, lastEntry;

    for (var i = 0; i < arr.length; i++) {
        newEntry = {value: arr[i], rest: null};
        if (list != null) {
            lastEntry.rest = newEntry;
        }
        else {
            list = newEntry;
        }
        lastEntry = newEntry;
    }
    return list;
}

// returns an array from a "list" data structure
function listToArray(list) {
    var arr = [];

    while (list != null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

// returns a new "list" with value prepended to the front of the passed in list
function prepend(value, list) {
    return {value: value, rest: list};
}

// returns the nth element of the passed in list, or undefined if it doesn't exist
function nth(list, number) {
    if (list == null)
        return undefined;
    else if (number == 0)
        return list.value;
    else
        return nth(list.rest, number - 1);
}

// test cases for arrayToList()
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: {value: 30, null}}}

// test cases for listToArray()
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// test cases for prepend()
console.log(prepend(10, null));
// → {value: 10, rest: null}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

// test cases for nth()
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

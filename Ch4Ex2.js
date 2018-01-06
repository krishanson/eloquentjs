// returns a copy of the passed in array with its elements in reverse order
function reverseArray(arr) {
    var arrNew = [];
  
    for (var i = arr.length; i > 0; i--) {
        arrNew.push(arr[i-1]);
    }
    return arrNew;
}

// returns the passed in array with its elements in reverse order, ala array.reverse()
function reverseArrayInPlace(arr) {
    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// test cases for reverseArray()
var arrayValue = ["A", "B", "C"];
console.log(reverseArray(arrayValue));
// → ["C", "B", "A"];
console.log(arrayValue);
// → ["A", "B", "C"];

// test cases for reverseArrayInPlace()
arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

arrayValue = [4, 3, 2, 1];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [1, 2, 3, 4]

arrayValue = [1];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [1]

arrayValue = [];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → []
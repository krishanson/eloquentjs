// flatten an array of arrays into a single array using array.reduce & array.concat
function flatten(arrays) {
    return arrays.reduce(
        function(a, b) {
            return a.concat(b);
        }, []);
}

// test case for flatten()
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]

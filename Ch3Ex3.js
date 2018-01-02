function countBs(str) {
    return countChar(str, "B");
}

function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char)
            count++;
    }
    return count; 
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("xyzZzy", "z"));
// → 2
console.log(countChar("TESTING", "t"));
// → 0
console.log(countChar("This is a test", "t"));
// → 2

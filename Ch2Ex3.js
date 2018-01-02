var strBoard = "";
var size = 8;
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        strBoard += ((i + j) % 2 == 0 ? " " : "#");
    }
    strBoard += "\n";
}
console.log(strBoard);
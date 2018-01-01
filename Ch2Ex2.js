for (var i = 1; i <= 100; i++) {
    var str = "";
    if (i % 3 == 0)
        str += "Fizz";
    if (i % 5 == 0)
        str += "Buzz";

    console.log(str || i);
}
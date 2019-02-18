fun();
// fun1();
// fun2();

function fun() {
    console.log("fun1");
}


var fun1 = fun;

var fun2 = function() {
    console.log("fun1");
}

fun();
fun1();
fun2();



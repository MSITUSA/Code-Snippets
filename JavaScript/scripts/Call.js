/*
    Assume we have a function called myFunc, and myFunc uses a 'this' keyword.
    We can use 'call' to invoke myFunc but assign another object to be used as 'this'.
    
    In other words, using 'call' a different 'this' can be assigned when calling a function.

    If our function has arguments, we can pass those along as well in 'Call'.
*/

function callExample() {
    console.clear(); // clear the chrome browser console.

    var obj1 = {
        num: 2
    };
    
    var myFunc = function (a, b) {
        return this.num + a + b;
    };
    
    // 10 is assigned to parameter a in myFunc, and 8 is assigned to b.
    var result = myFunc.call(obj1, 10, 8);
    console.log("Example of call => " + result);
}

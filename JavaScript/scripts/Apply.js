/*
    'Apply' is similar to 'Call' except in 'call' we pass
    arguments separately as a comma separated list,
    but in 'Apply' we pass an array.
    
    Assume we have a function called myFunc, and myFunc uses a 'this' keyword.
    We can use 'Apply' to invoke myFunc but assign another object to be used as 'this'.
    
    In other words, using 'Apply' a different 'this' can be assigned when calling a function.
    
    If our function has arguments, we can pass those along as well in 'Apply'.
*/

function applyExample() {
    console.clear(); // clear the chrome browser console.
    
    var obj1 = {
        num: 2
    };
    
    var myFunc = function (a, b) {
        return this.num + a + b;
    };
    
    // 10 is assigned to parameter a in myFunc, and 8 is assigned to b.
    var result = myFunc.apply(obj1, [10, 8]);
    console.log("Example of apply => " + result);
    
    // Example from MDN.
    // min/max number in an array
    var numbers = [5, 6, 2, 3, 7];

    // using Math.min/Math.max apply
    var max = Math.max.apply(null, numbers);
    console.log("Result of Math.max on array: " + numbers + " is: " + max);
    // This about equal to Math.max(numbers[0], ...)
    // or Math.max(5, 6, ...)
}

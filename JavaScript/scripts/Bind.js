/*
    'Bind' is similar to 'Call' except 'Bind' returns a copy of the function.
    
    Assume we have a function called unboundFunc, and unboundFunc uses a 'this' keyword.
    We can use 'Bind' to get a copy of unboundFunc called boundFunc.
    But the boundFunc has its 'this' replaced by an object that we pass to the bind.
    
    In other words, 'Bind' returns a copy of a function and reassigns 'this'.
    
    If our function has arguments, we can pass those along as well in 'Bind'.
*/

function bindExample() {
    console.clear(); // clear the chrome browser console.
    
    var obj1 = {
        num: 2
    };
    
    var unboundFunc = function (a, b, c) {
        return (this.num + a + b + c);
    };
    
    var boundFunc = unboundFunc.bind(obj1, 98,1,2);
    
    console.log("Example of bind => " + boundFunc());
    console.log("Our original function unboundFunc has not changed: " + unboundFunc);
}

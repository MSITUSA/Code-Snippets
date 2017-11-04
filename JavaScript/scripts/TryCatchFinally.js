/*
    try catch and finally are blocks of code that are used to when a piece of
    code might throw an error.
    The try block contains code that might possibly throw the error.
    We can also manually throw errors on some condition by using throw "some error".
    The catch block follows the try block and will catch any error thrown in try block.
    The finally block follows the try block.
    The finally block is always executed, irrespective of an error being thrown in try block.
*/
function tryCatchFinallyExample() {
    console.clear(); // clear the chrome browser console.
    
    console.log("Example of Try Catch Finally");
    console.log("Example 1: Manually throw an error");
    try {
        console.log("Try block: Lets try to throw an error.");
        throw "intentionally thrown error.";
    } catch (err){
        console.log("Catch block: Caught error: " + err);
    } finally {
        console.log("Finally block: This block is always executed.");
    }
    
    console.log("Example 2: Error thrown by JavaScript engine");
    try {
        console.log("Try block: invoking a function that is not defined will throw error.");
        invokeUndefinedFunction();
    } catch (err){
        console.log("Catch block: Caught error: " + err);
    } finally {
        console.log("Finally block: This block is always executed.");
    }
}

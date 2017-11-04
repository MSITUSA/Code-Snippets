/*
    Here we are returning a promise from the sayHello() function.
    To simulate async behavior, we are using a setTimeout() which will resolve
    the promise after one second.
*/


function promisesTwoExample() {
   console.clear();
   
    function sayHello() {
        console.log("sayHello function invoked.");
        return new Promise(function(resolve, reject){
            setTimeout(function() {
                console.log("Invoking resolve() after waiting for 1 second.");
                resolve() ;
            }, 1000);
        })
    }
    
    // Since sayHello() returns a promise, we can use then() to wait for the promise to resolve.
    // When the promise resolves, we print a statement to console.
    sayHello().then(function () {
        console.log("This callback function will execute when promise has resolved.");
    });
    
    // After invoking sayHello() and the promise is executing asynchronously,
    // this next statement is invoked not waiting for the promise to finish.
    // This next statement is invoked synchronously, just like sayHello().
    console.log("Some other code executes. Not waiting for async code to execute.")
}

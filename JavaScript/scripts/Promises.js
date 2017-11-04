/*
    A promise object may or may not have a value now,
    but will eventually receive a value when asynchronous operation finishes.
    In other words, a promise represents the eventual result of an asynchronous operation.
    It acts like a placeholder for when the async operation will either execute successfully or fail.
*/

/*
    Create a new promise using new Promise()
    The constructor is passed a callback function which has two parameters.
    The first parameter is resolve function (not a key word, you can call it anything)
    Invoke resolve() when your promise has successfully completed.
    The second parameter is reject function.
    Invoke reject() if your promise has did not successfully complete.
*/
function promiseExample() {
    console.clear();
    
    var myPromise = new Promise(function (resolve, reject) {
        console.log("execute business logic inside promise");
        resolve("myPromise was successful.");
    });

    // then() will be invoked by javascript when your promise resolves.
    // then() also returns another promise, which can again be chained as shown below.
    myPromise.then(function (message) {
        console.log('myPromise was resolved: ' + message);
    }).then(function () {
        console.log('This is promise chaining.');
    });
}
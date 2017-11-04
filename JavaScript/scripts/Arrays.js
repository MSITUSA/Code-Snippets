
function arraysExample() {
    var arr = ["one", "two", "three"];
    console.log("Consider an array: [" + arr + "]");
    var joinedArr = arr.join("-");
    console.log("Array.prototype.join() joins elements of an array: " + joinedArr);
    
    arr.push("four");
    console.log("Array.prototype.push() adds an element to the end of an array.")
    console.log("example: arr.push('four') results in [ " + arr + " ]");
    
    arr.pop();
    console.log("Array.prototype.pop() removes an element from the end of an array.")
    console.log("example: arr.pop() results in [ " + arr + " ]");
    
    arr.unshift("zero");
    console.log("Array.prototype.unshift() adds an element to beginnig of the array and pushes rest of the elements right.")
    console.log("example:  arr.unshift('zero') results in [ " + arr + " ]");
    
    arr.shift("");
    console.log("Array.prototype.shift() removes an element from the beginnig of an array and shifts rest of the elements left.")
    console.log("example:  arr.shift() results in [ " + arr + " ]");
    
}
function hoistingExample () {
    console.log("hoistingExample(): before declaration: outerVar=" + outerVar);
    console.log("outerVar is undefined above, but still does not throw ReferenceError because of hoisting");
    console.log("If we use let instead of var the above line would throw ReferenceError");
    console.log("That is because let and const are not subject to hoisting, that is they are not hoisted.");
    var outerVar = 20;
    console.log("hoistingExample(): after declaration: outerVar=" + outerVar);
    
    function innerScope(){
        console.log("innerScope(): before declaration: innerVar=" + innerVar);
        console.log("innerVar is undefined above, but still doesn't throw ReferenceError because of hoisting.");
        var innerVar = 10;
        console.log("innerScope(): after declaration: innerVar=" + innerVar);
    }
    innerScope();
    
}

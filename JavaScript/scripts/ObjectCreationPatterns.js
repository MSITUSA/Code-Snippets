/*
   Object Creation Patterns.
*/
function objectCreationExample() {
    /*
   Creating objects using literal notation.
  */
    var obj = {
        "name": 'Omer',  // key : value
        'loves': 'chocolates', // key can be in '' or ""
        eats: "every thing edible" // or without either.
    };
    
    console.log("Create object using literal notation: " + JSON.stringify(obj));
    
    
    /*
        Creating objects using Constructors
    */
    var Person = function (name, state) {
        this.name = name;
        this.state = state;
        this.printPerson = function () {
            console.log(this.name + ", " + this.state);
        };
    };
    
    var person1 = new Person('Omer','CA');
    console.log("Create object using constructors using new keyword");
    person1.printPerson();
    
    
    /*
        Factory pattern
    */
    var personFactory = function(name, state) {
        var temp = {};
        
        temp.name = name;
        temp.state = state;
        
        temp.printPerson = function() {
            console.log(this.name + ', ' + this.state);
        };
        
        return temp;
    };
    
    console.log("Create object using Factory pattern");
    var person2 = personFactory('Omer', 'CA');
    person2.printPerson();
    
    /*
        Prototype Pattern.
        properties and functions are added to the prototype
    */
    var personProto = function () {};
    personProto.prototype.name = 'Default Name';
    personProto.prototype.state = 'Default State';
    personProto.prototype.print = function () {
        console.log("Name: " + this.name + "; State: " + this.state);
    };
    
    console.log("Create object using Protorype pattern");
    var person3 = new personProto();
    person3.name = "Omer";
    person3.state = "CA";
    
    person3.print();
    
    /*
        Dynamic Prototype pattern
    */
    var personDynamicProto = function (name, state) {
        
        this.name = name;
        this.state = state;
        
        if (typeof this.print !== "function") {
            personDynamicProto.prototype.print = function () {
                console.log("Name: " + this.name + "; State: " + this.state);
            };
        }
        
    };
    
    console.log("Create object using Dynamic Prototype pattern");
    var person4 = new personDynamicProto('Omer', 'CA');
    person4.print();
}

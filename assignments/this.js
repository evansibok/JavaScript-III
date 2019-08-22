/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - Whenever "this" is called in a global context it refers to the global window object.
* 2. New Binding - When "this" is called in a new constructor, "this" refers to the instance of the object called.
* 3. Implicit Binding - When a function is called by a preceding ".", the object left of the dot gets the "this".
* 4. Explicit Binding - When "this" keyword is called either using "call", "apply", or "bind" this is explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayMyName(name){
    console.log(this);
    return this.name;
}
sayMyName("Evans");

// Principle 2

// code example for Implicit Binding

let laugh = {
    laughing: "I am laughing so hard!",
    exposeLaugh: function(){
        console.log(this);
        return `Hello, I guess ${this.laughing}`;
    }
}
laugh.exposeLaugh();



// Principle 3

// code example for New Binding

function Teacher(name, course){
    this.name = name;
    this.course = course;
}

Teacher.prototype.introduction = function(){
    console.log(`implicit binding  `, this)
    console.log(`My name is ${this.name} and I teach ${this.course}`)
}

var bimbo = new Teacher('Bimbo', 'Physics');
bimbo.introduction();

// Principle 4

// code example for Explicit Binding


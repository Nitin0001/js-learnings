
//Object Literals
const mySymbolTest = Symbol("key1")
const jsUser = {
    name: "Nitin Dhiman", 
    age: 26,
    [mySymbolTest]: "Lets pray it works"
}
jsUser.hobbies = "anime"
// Object.freeze(jsUser)
// jsUser.name="ABC"
jsUser.greetings = function() {
    console.log(`A very Happy Good Evening Mr. ${this.name}.`)
}
// console.log(jsUser.name);
// console.log(jsUser[mySymbolTest]);
// console.log(jsUser.hobbies);
// console.log(jsUser.greetings());

// singleton object
// const testObj = new Object()
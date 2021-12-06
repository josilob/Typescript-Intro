// TS is transpiled to ES3 by default - Working in every browser
// Types do not have to be passes explicitly, TS will understand expected output but not providing types beats the purpose
// #################
// ### VARIABLES ###
// #################
var a = '1';
console.log('aaa', a); // Property foo does not exist on type 1
// tsc -w // make watcher look for file change and transpile to native JS code
// it looks for destination in tsconfig.json, if not found we must type relative path
// tsc ./src/script.ts in terminal
var hello = 'world';
// hello = 'hello' // error: cannot assign to 'hello' because it is constant
var world = 'world';
world = 'hello'; // no errors because let is re-assignable
// world = [] // type 'undendified[]' is not assignable to type 'string'
// #################
// ### FUNCTIONS ###
// #################
// proper declaration is not just declaration of type for our arguments but for the output as well
// const myFn = (param1:type, param2:type):functionOutputType=>{
//  function block here
//}
var getFullName = function (name, lastName) {
    return name + ' ' + lastName;
};
var user = {
    name: 'Monster',
    age: 30,
    getMessage: function () { return 'Hello' + name; }
};
// it can be written using either interface or object's types explicitly.
// Works either way but interface helps with complexity and readability
// To make object field optional we add question mark '?' before key-type
var user2 = {
    name: 'Jack',
    getMessage: function () { return 'Hello ' + name; }
};
// UNION OPERATORS
var username = 'Bojan'; // explicitly string type
var pageName = '1'; // optional string or number type
// single pipe "|" is called union operator and it is used to combine data types
// Most popular usage is checking for null - working with data that is null initially which we later on fetch and get the data type we will be working with
var errorMessage = null;
var anotherUser = null; // Union operators support interfaces
var someProp; // not suggested way to write unions
var popularTags = ['tea', 'coffee']; // acceptable but...
var popularTags2 = ['tea', 'coffee']; // more understandable way of writing
var drinksTag = null; // if we add empty array [], it will throw an error
// ANY, NEVER, VOID, UNKNOWN
// void function => has NO RETURN in it's block
var doSomething = function () {
    console.log("do something");
};
var doSomethingTS = function () {
    console.log('void function');
};
// type of: ANY as the most general type, meaning it accepts any type
// not recommended way of dealing with types
var foo = 'foo';
foo = 5;
foo = undefined;
foo = null;
// type of: NEVER
var anotherFn = function () {
    throw 'never happens'; // rare application
};
var varAny = 10;
var varUnknown = 10;
var s1 = varAny;
// let s2: string = varUnknown // type unknown is not assignable to type string
// it cant be assigned directly in other type
// console.log(varAny.foo())
// console.log(varUnknown.foo()) // property foo does not exist on type 'unknown'
// TYPE ASSERTION with 'as' OPERATOR
var s2 = varUnknown; // workaround error from the line 136
// unknown type gets converted to a string type and then it is assigned string type inside of the new string variable
// it can be also done with any types
var pageNum = '1';
// let numericPageNum:number = pageNum as number
// above line gives us error saying conversion of type string to type number can not be done
// in order to do it, it must be converted to the 'unknown' first, so it would look like:
var numericPageNum = pageNum;
// TYPESCRIPT and DOM
var page = '1';
var pageNumber = page;
// element is the highest class in hierarchy of DOM
// Most common and INCORRECT way to fix errors
var someElement = document.querySelector('.fooClass');
console.log('someElement', someElement.value);
// Correct:
var anotherElement = document.querySelector('.fooClass'); // Correct way
console.log('anotherElement', anotherElement.value);
// adding a listener
// Since TS does not have any insight in our Markup(HTML),
anotherElement.addEventListener('click', function (e) {
    var target = e.target;
    console.log('event: ', target.value); // no error now
});

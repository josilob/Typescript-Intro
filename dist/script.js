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
// console.log(getFullName(true,['foo'])) // Throws an error because types are not matching
console.log(getFullName('Bojan', 'Josilo'));
var user = {
    name: 'Monster',
    age: 30
};
// it can be written using either interface or object's types explicitly. Works either way but interface helps with complexity and readability
// To make object field optional we add question mark '?' before key-type
var user2 = {
    name: 'Jack'
};

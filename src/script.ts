// TS is transpiled to ES3 by default - Working in every browser
// Types do not have to be passes explicitly, TS will understand expected output but not providing types beats the purpose

// #################
// ### VARIABLES ###
// #################
const a = '1';
console.log('aaa',a) // Property foo does not exist on type 1

// tsc -w // make watcher look for file change and transpile to native JS code
// it looks for destination in tsconfig.json, if not found we must type relative path
// tsc ./src/script.ts in terminal

const hello:string = 'world'
// hello = 'hello' // error: cannot assign to 'hello' because it is constant

let world:string = 'world'
world = 'hello' // no errors because let is re-assignable
// world = [] // type 'undendified[]' is not assignable to type 'string'

// #################
// ### FUNCTIONS ###
// #################
// proper declaration is not just declaration of type for our arguments but for the output as well

// const myFn = (param1:type, param2:type):functionOutputType=>{
//  function block here
//}
const getFullName=(name:string,lastName:string):string=>{
  return name + ' ' + lastName
}
// console.log(getFullName(true,['foo'])) // Throws an error because types are not matching
// console.log(getFullName('Bojan','Josilo'))

// #################
// #####OBJECTS#####
// #################
// Here is important to understand application of INTERFACES
// This is what makes TS a bit harder. We must have enough interfaces to cover all combinations but not too many at the same time since this will make project hard to support

// Create an interface that can be shared across different users as a data type
interface UserInterface {
  name:string;
  age?:number;
  getMessage():string
}

const user:UserInterface = {
  name:'Monster',
  age:30,
  getMessage(){return 'Hello' + name}
}

// it can be written using either interface or object's types explicitly.
// Works either way but interface helps with complexity and readability
// To make object field optional we add question mark '?' before key-type

const user2:{name:string, age?:number, getMessage():string} = {
  name:'Jack',
  getMessage(){return 'Hello '+name}
}

console.log(user.getMessage())
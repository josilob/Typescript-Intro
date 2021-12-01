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

// UNION OPERATORS
let username:string='Bojan' // explicitly string type
let pageName:string|number = '1' // optional string or number type
// single pipe "|" is called union operator and it is used to combine data types

// Most popular usage is checking for null - working with data that is null initially which we later on fetch and get the data type we will be working with

let errorMessage:string|null=null;
// if we just declare data type without assigning it, by default it will be 'undefined'
// as in: let errorMessage:string|null (without asignment operator "=")

interface IUser {
  name:string,
  lastName:string
}

let anotherUser : IUser | null = null // Union operators support interfaces

let someProp: string|number|null|undefined|string[]|object // not suggested way to write unions

// TYPE ALIASES

// we can create our own types

type ID = string // new type is made and it is of type string

interface AnotherInterface {
  id: ID, // totally valid, but redundant in this case
  name: string,
  age: number
}

// Benefit of Types, example:
type PopularTag = string

const popularTags:string[] = ['tea','coffee'] // acceptable but...
const popularTags2:PopularTag[] = ['tea','coffee'] // more understandable way of writing
// it represent entity within the application and what it is about. This is the array of those entities

// Combo of UNIONS and TYPE ALIASES

type MaybePopularTag = PopularTag | null // this custom tag is either PopularTag or null

const drinksTag : MaybePopularTag = null // if we add empty array [], it will throw an error


// ANY, NEVER, VOID, UNKNOWN

// void function => has NO RETURN in it's block
const doSomething =()=>{
  console.log("do something")
}

const doSomethingTS=():void=>{
  console.log('void function')
}

// type of: ANY as the most general type, meaning it accepts any type
// not recommended way of dealing with types
let foo:any = 'foo'
foo = 5;
foo = undefined;
foo = null;

// type of: NEVER

const anotherFn = ():never=>{ // a function returning never can not have a reachable point
  throw 'never happens' // rare application
}

let varAny:any = 10
let varUnknown:unknown = 10
let s1: string = varAny
// let s2: string = varUnknown // type unknown is not assignable to type string
// it cant be assigned directly in other type

console.log(varAny.foo())
// console.log(varUnknown.foo()) // property foo does not exist on type 'unknown'

// TYPE ASSERTION with 'as' OPERATOR

let s2: string = varUnknown as string; // workaround error from the line 136
// unknown type gets converted to a string type and then it is assigned string type inside of the new string variable

// it can be also done with any types

let pageNum:string = '1'
// let numericPageNum:number = pageNum as number

// above line gives us error saying conversion of type string to type number can not be done
// in order to do it, it must be converted to the 'unknown' first, so it would look like:
let numericPageNum:number = (pageNum as unknown) as number

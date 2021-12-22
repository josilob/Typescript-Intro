// TS is transpiled to ES3 by default - Working in every browser
// Types do not have to be passes explicitly, TS will understand expected output but not providing types beats the purpose

// CONFIGURATION
// type in terminal: tsc --init // => creates tsconfig.json file
// here we define output file/folder structure, compilation version etc...

// tsc -w // make watcher look for file change and transpile to native JS code
// it looks for destination in tsconfig.json
// if not found we must type relative path: tsc ./src/script.ts in terminal

// #################
// ### VARIABLES ###
// #################

// Number
let first:number = 123; // number
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary

// String
const a = '1';
console.log('aaa',a)
const hello:string = 'world'



// #################
// ##### TUPLES ####
// #################

// This is data type containing two values of different data types

let empId:number = 1
let empName:string = 'Steve'
// or Tuple type variable
let employee:[number,string]=[1,'Steve']

// It can also include multiple data types:
let employee2:[number,string]=[1,'Steve']
let person:[number,string,boolean]=[1,'Steve',true]
let userOne:[number,string,boolean,number,string] = [1,'Steve',true,20,'Admin']

// Tuple array
let employee3:[number,string][]=[[1,'Steve'],[2,'Bill']]

// Tuple elements are accessed using index, the same way as an array. An index starts from zero.
employee[0]; // returns 1
employee[1]; // returns 'Steve'

// Add elements into Tuple (using push() method):
employee.push(2,'Bill') // => [1,'Steve', 2, 'Bill']

// The tuple is like an array. So, array methods such as pop(), concat() etc. can be used


// #################
// #### ARRAYS ####
// #################

// There are two ways to declare an array and both produce the same output:
// 1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
// 2. Using a generic array type, Array<elementType>.
let fruits2: Array<string> = ['Apple', 'Orange', 'Banana'];

// Arrays in TypeScript can contain elements of different data types using a generic array type syntax:

let values:(string|number)[]=['Apple',2,'Orange',3,4,'Banana']
let values2:Array<string|number>=['Apple',2,'Orange',3,4,'Banana']

// Afterwards, accessing and working with the array items is the same as in JS
// Same methods, accessors and loops are used

let fruits3: string[] = ['Apple', 'Orange', 'Banana'];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

for(const index in fruits){
    console.log(fruits[index]);  // output: Apple Orange Banana
}


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

// console.log(varAny.foo())
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


// TYPESCRIPT and DOM

let page: any = '1'
let pageNumber = page as string

// element is the highest class in hierarchy of DOM

// Most common and INCORRECT way to fix errors
// const someElement = document.querySelector('.fooClass')
// console.log('someElement',(someElement as any).value)

// // Correct:
// const anotherElement = document.querySelector('.fooClass') as HTMLInputElement // Correct way
// console.log('anotherElement',anotherElement.value)

// adding a listener
// Since TS does not have any insight in our Markup(HTML),
// anotherElement.addEventListener('click',(e)=>{
//   const target = e.target as HTMLInputElement;
//   console.log('event: ',target.value) // no error now
// })

// CLASSES in TS
// PRIVATE, PUBLIC and PROTECTED (three words we can make all properties and functions public or hidden)
// PROTECTED values are allowed in class itself and its children (private + inheritence)

// Private, public and protected EXIST ONLY in TS - they DO NOT EXIST in JS
// this safe typing is only happening during development in TS

// INTERFACES

interface UserInterface2{
  getFullName():string
}

class User implements UserInterface2 {
  // implementing interface we must have getFullName() in this class

  private firstName:string
  public lastName:string
  readonly unchancheableName:string
  static readonly maxAge = 50
  // STATIC - usable only on class itself, not on instances (objects)
  // meaning our users wont have property maxAge

  constructor(firstName:string, lastName:string){
    this.firstName = firstName
    this.lastName = lastName
    this.unchancheableName = firstName
  }

  changeUnchangeableName():void{
    // this.unchancheableName = 'foo'; // ERROR => READ ONLY => Can not be changed (as in constant)
  }

  getFullName():string{
    return this.firstName + ' ' + this.lastName
  }
}
const theUser = new User('Mickey','Mouse') // user of type User
// console.log(theUser.firstName) // if we keep firstName as private it will ERROR
console.log(theUser.getFullName()) // it works, because firstName is accessed internally


//  INHERITANCE

class Admin extends User{
  private editor:string

  setEditor(editor:string):void{
    this.editor=editor
  }

  getEditor():string{
    return this.editor
  }
}

const admin = new Admin('Tom','Cat') // Works just like User, since it inherits it's props/functions
console.log(admin.getFullName()) // => 'Tom Cat'
console.log(admin.getEditor()) // => Only Admin objects have access to this

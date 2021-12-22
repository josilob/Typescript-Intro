// TS is transpiled to ES3 by default - Working in every browser
// Types do not have to be passes explicitly, TS will understand expected output but not providing types beats the purpose
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var first = 123; // number
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
// String
var a = '1';
console.log('aaa', a);
var hello = 'world';
// #################
// ##### TUPLES ####
// #################
// This is data type containing two values of different data types
var empId = 1;
var empName = 'Steve';
// or Tuple type variable
var employee = [1, 'Steve'];
// It can also include multiple data types:
var employee2 = [1, 'Steve'];
var person = [1, 'Steve', true];
var userOne = [1, 'Steve', true, 20, 'Admin'];
// Tuple array
var employee3 = [[1, 'Steve'], [2, 'Bill']];
// Tuple elements are accessed using index, the same way as an array. An index starts from zero.
employee[0]; // returns 1
employee[1]; // returns 'Steve'
// Add elements into Tuple (using push() method):
employee.push(2, 'Bill'); // => [1,'Steve', 2, 'Bill']
// The tuple is like an array. So, array methods such as pop(), concat() etc. can be used
// #################
// #### ARRAYS ####
// #################
// There are two ways to declare an array and both produce the same output:
// 1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.
var fruits = ['Apple', 'Orange', 'Banana'];
// 2. Using a generic array type, Array<elementType>.
var fruits2 = ['Apple', 'Orange', 'Banana'];
// Arrays in TypeScript can contain elements of different data types using a generic array type syntax:
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
var values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// Afterwards, accessing items and working with the arrays is the same as in JS
var fruits3 = ['Apple', 'Orange', 'Banana'];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
for (var index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}
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
var User = /** @class */ (function () {
    // STATIC - usable only on class itself, not on instances (objects)
    // meaning our users wont have property maxAge
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchancheableName = firstName;
    }
    User.prototype.changeUnchangeableName = function () {
        // this.unchancheableName = 'foo'; // ERROR => READ ONLY => Can not be changed (as in constant)
    };
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var theUser = new User('Mickey', 'Mouse'); // user of type User
// console.log(theUser.firstName) // if we keep firstName as private it will ERROR
console.log(theUser.getFullName()); // it works, because firstName is accessed internally
//  INHERITANCE
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('Tom', 'Cat'); // Works just like User, since it inherits it's props/functions
console.log(admin.getFullName()); // => 'Tom Cat'
console.log(admin.getEditor()); // => Only Admin objects have access to this

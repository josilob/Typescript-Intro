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

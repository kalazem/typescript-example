//compiling and variables 
var a = 3.2;
//specifying the type of properties
var obj = {
    x: 3,
    y: 5
};
obj.z = 7;
//#1
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    //Declaring a function inside a class does not require the word "function"
    //check line 48
    UserAccount.prototype.getName = function () {
        return this.name;
    };
    return UserAccount;
}());
var user = new UserAccount("Khaled", 2);
//The type of the expected value is specified 
function getUser() {
    return user;
}
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else {
        return obj;
    }
}
var returnedValue = wrapInArray(["khaled"]);
console.log(returnedValue);
;
function printPoint(p) {
    console.log(p.x + ", " + p.y + ", " + p.name);
}
var point = { name: "triangle", y: 30, x: 70 };
printPoint(point);
//functions 
//casting
//any

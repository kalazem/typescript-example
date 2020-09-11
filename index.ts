//compiling and variables 
const a = 3.2;

interface MyObj {
    x: number;
    y: number; 
    z?: number;
}

//specifying the type of properties
const obj: MyObj = {
    x: 3,
    y: 5,
};

obj.z = 7;




interface User { 
 name: string;
 id: number;
}

//#1
class UserAccount { 
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    //Declaring a function inside a class does not require the word "function"
    //check line 48
     getName(): string {
        return this.name;
    }
}

const user: User = new UserAccount("Khaled", 2);

//The type of the expected value is specified 
function getUser(): User {
    return user;
}


//-------------------------Type Composition-------------------------

//Using Union: means a type could be one of many types
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";

function getLength(obj: string | string[]){
    return obj.length;
}

function wrapInArray(obj: string | string[]){
    if (typeof obj === "string") {
        return [obj];
    } else {
        return obj;
    }
}

const returnedValue = wrapInArray(["khaled"]);
console.log(returnedValue);

//Using Generics 


//Duck typing 

interface Point { 
    x: number;
    y: number;
    name: string;
};

function printPoint(p: Point){
    console.log(`${p.x}, ${p.y}, ${p.name}`);
}

const point = {name: "triangle", y: 30, x: 70};
printPoint(point);

//functions 
//casting
//any
// compiling and variables 
// const a: number = 4.312; //explicitly stating the type


interface Myobject {
    x: number;
    y: number;
    z?: number;
 }


let obj: Myobject = {
    x: 32,
    y: 5
};

obj.z = 123; //this wont work but if we want to keep this porperty optional --> we need to add this "z?: number" to the interface 
console.log(obj.z);
obj.z = 44;
console.log(obj.z);

obj.y = 33;
console.log(obj.y);


//Funtions 

type addFunction = (x: number, y: number) => number; // it is a separte type and is ideal for re-using things


// // const add: (x: number, y: number) => number = (x: number, y: number) => x + y; // but there is no need for specifying the return type as it does it by itself
const add: addFunction = (x: number, y: number) => x + y; // but there is no need for specifying the return type as it does it by itself

console.log(add(3, 5));


// unions 
let myBeNum: number | string | Myobject |  addFunction  = 5;
console.log(typeof myBeNum)
// myBeNum = (x: number, y: number) => x+y;

type Num = Myobject;



//Casting 

add(myBeNum, myBeNum);

 


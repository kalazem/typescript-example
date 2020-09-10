// compiling and variables 
// const a: number = 4.312; //explicitly stating the type
var obj = {
    x: 32,
    y: 5
};
obj.z = 123; //this wont work but if we want to keep this porperty optional --> we need to add this "z?: number" to the interface 
console.log(obj.z);
obj.z = 44;
console.log(obj.z);
obj.y = 33;
console.log(obj.y);
// // const add: (x: number, y: number) => number = (x: number, y: number) => x + y; // but there is no need for specifying the return type as it does it by itself
var add = function (x, y) { return x + y; }; // but there is no need for specifying the return type as it does it by itself
console.log(add(3, 5));
// unions 
var myBeNum = 5;
console.log(typeof myBeNum);
myBeNum = function (x, y) { return x + y; };
console.log(typeof Num);

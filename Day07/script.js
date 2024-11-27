//

//hoisting

console.log(college);
console.log(window);
var college;

// var is hoisted the initial value will be undefined

// let ,const
// let => hoisted tdz => temporal dead zone
// console.log(rollno)

// let rollno ;

// rollno = 5 ;

//function declaration is hoisted inital value will be the function you have defined.
console.log(window);
function greet() {
  console.log('hello');
}

//function expression ;
// console.log(sum())
var sum = function (a, b) {
  return a + b;
};

// console.log(multiply)
// let multiply = function(a,b){
//   return a * b
// }

//type erros

// const str = 'hello'

// str.map()

//var , let , const

let a = 5;

function demo() {
  var b = 5;
}

demo();

// console.log(b)

if (true) {
  var c = 10;
}

// console.log(c) ;

// JSON =>

const gadget = {
  gadgetName: 'smartwatch',
  batterLife: '40hr',
};

//NOTE JSON DATA LOOK LIKE THIS 
// {
//   "gadgetName" : "smartwatch",
//   "batteryLife" : "40hr"
// }

//NOTE stringify used to convert the object into json or in string form

const obj = JSON.stringify(gadget);

console.log(obj);

//parse convert the json back to obj
const convertToObj = JSON.parse(obj);

console.log(convertToObj);

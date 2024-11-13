//NOTE Value and variables :

//  number = 5 => value can be of different types

//NOTE DATATYPES : 

//PRIMITIVE AND NON PRIMITIVE :

//NOTE primitive 

//NOTE number
//camelCase is used to created variables in the javascript

const phoneNumber = 324324 ;

//typeof 

console.log(typeof phoneNumber)

//NOTE String

const firstName = 'ritesh' ;

console.log(typeof firstName)


//boolean

const isJsFun = true ;

console.log(typeof isJsFun) ;

//NOTE null
let department = null ;
console.log(typeof department) ;

//NOTE undefined
let college ;
college = 'arya'
console.log(typeof college)
//bigint 
console.log(Number.MAX_SAFE_INTEGER)
const largeNumber = 1234567890123456789012345678901234567890n
console.log(largeNumber)

//symbol

//NOTE keyword to declare the variables  => let , const , var

//let ,const , var ;

//redeclare and reassign

//NOTE LET redeclaration❌ and reassign✅

let product = 'ac' ;
console.log(product);
product = 'tv' ;
console.log(product)

// let product = 'fridge' //redeclaration

//NOTE const redeclaration❌ and reassign ❌

const company = 'google' ;
// company = 'meta' ;
// console.log(company)

// const company = 'ibm'

//NOTE Var  redeclaration✅ and reassign✅

var address  = 'jaipur' ;

address = 'udaipur' ;
console.log(address)
var address = 'delhi'
console.log(address) ;

//operators 

//airthmatic operators 
//NOTE = + , - , * , / ,% , ** 
console.log(4+4);
console.log('abc' + ' ' + 'xyz')


//assignment operators ; 
//NOTE = , += , -= , *= , /= 

let x  = 5 ;
// x = x + 5 ;
x += 5
console.log(x) ;

//comparison operators
// == , === , != ,!== , <= , >= 

//NOTE loose equality ;
console.log(5 == '5') ;

//NOTE strict equality

console.log(5 === '5')

//NOTE != not equal 
console.log(5 != '5') ;

//NOTE !== strict not equal
console.log(5 !== '5') ;

//logice && || !

//NOTE statement and expression ;

//NOTE type conversion and type coersion 

//NOTE type coersion

const sum = 5 + '5' ; 
// => '55'
console.log(sum , typeof sum) ;

const bol = true + 1 ;
// => 2 number
console.log(bol , typeof bol)

const num  = +'5' ;
console.log(num , typeof num)

//Type conversion 

//by using some inbuilt function i can change the datatype of the variables .

const str = 'true' ;

console.log(typeof Boolean(str));

const n = '5' ;
console.log(typeof Number(n)) ;

//String() ;

const s = 5 ;
console.log(typeof String(s)) ;

//NOTE condition statement if , else , else if , switch
const numm = 8
if(numm < 5){
    console.log('number is less than 5')
}else {
    console.log('number is greater than 5')
}

//truthy and falsy values
//falsy => '' , 0 , null , undefined 
//truthy => !0 or !''

if(4){
    console.log('value is truthy')
}else{
    console.log('value is falsy')
}


//nested if else
const isMember = true ;
const totalPurchase = 600 ;

if(isMember){
if(totalPurchase > 500){
console.log('give 20% discount')
}else{
console.log('only give 10% discount')
}
}else{
console.log('not a member')
}

//interaction functions 
//NOTE prompt ,confirm , alert 

// alert('hello')
// const collegeName = prompt("enter your college")

// alert(collegeName)

// const output = confirm('you are member of flipkart')
// console.log(output)

//NOTE - 
//create a prompt('enter drink : 'cola' , 'tea','coffee','pepsi') ;

// console.log('dispensing cola..')

// let drink = prompt('enter drink cola , pepsi , tea , coffee') ;

// if(drink === 'cola'){
//     console.log('dispensing cola')
// }else if(drink ==='pepsi'){
//     console.log('dispensing pepsi')
// }else if(drink ==='tea'){
//     console.log('dispensing tea')
// }else if(drink ==='coffee'){
//     console.log('dispensing coffe')
// }else {
//     console.log('invalid drink')
// }

// switch(drink){
//     case 'tea' :
//         console.log('dispensing tea')
//         break;
//         case 'coffee' : 
//         console.log('dispensing coffee')
//         default : 
//         console.log('invalid drink')
// };

//NOTE NON PRIMITIVES : 

//arrays and object : 

const arr = [1,true ,'ritesh',[1,2]]; 

//index position 
console.log(arr.length)
//accessing the arrays values : 
console.log(arr[arr.length - 1])  ;

//updating a value at particular index 
arr[0] = '234' ;

console.log(arr) ;

console.log(typeof arr) ;

//OBJECT 

const mydetails = {
    firstName : 'ritesh' ,
    age : 2024 - 1997 ,
    hasDrivingLicense : true ,
    friends : ['abc','xyz'] ,
    address : {
        state : 'rajasthan',
        city : 'jaipur'
    },
 

}

//print values in the object 
//we can use two ways 1st dot notation 2nd bracket notation

//NOTE DOT NOTATION : 
console.log(mydetails.firstName)
//accessing a array inside a object
console.log(mydetails.friends[0])
//accessing a object inside a object
console.log(mydetails.address.state) ;


//NOTE updating a particular key in a object
mydetails.firstName = 'abc'

//NOTE when a key is not available in the object it returns "undefined" ;
console.log(mydetails.obj)
console.log(mydetails) ;

//NOTE bracket notation 
let key = prompt('enter a key firstName or age')
console.log(key)
console.log(mydetails[age]) ;


//NOTE if(mydetails['address']){

// }else{

// }














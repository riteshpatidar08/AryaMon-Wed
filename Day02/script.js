//printing a statement using string interpolation or string template ;

const firstName = 'abc' ;
const lastName = 'xyz' ;
const address = 'jaipur' ;

console.log('my' + ' ' + 'firstName' + ' ' + 'is' + firstName) ;

console.log(`my name is ${firstName}`) ;


//NOTE Ternary operator ;

const hasMember = true ;
const totalPurchase = 400 ;

hasMember ? totalPurchase > 500 ? console.log('give 20% discount'
) : console.log('give 10% discount')   : conosle.log('no discount') ;

//loops 
// for , while , do while , for of and for in  ;


//NOTE for of and for in 

const products = ['tv','ac','washing-machine','fridge'] ;

for(let item of products){
    console.log(item)
}

//for in 

for(let index in products){
    console.log(index)
}

const details = {
    firstName : 'ritesh',
    address : 'jaipur'
}

for(let keys in details ){
    console.log(`${keys}:${details[keys]}`)
}

// ❌ not work in the case of object
// for(let values of details){
//     console.log(values)
// }

// firstName : 'ritesh'
// address : 'jaipur'


//NOTE do while 
let count = 0 


// do {
//     count++
//     console.log(count);

// }while(count < 5) ;
// const password  = 'ritesh@123'
// do{
//     prompt('enter the password')
// }while(password !== confirmPassword) 


// const password = 'ritesh@123' ;
// let confirmPassword ;

// do{
//     confirmPassword = prompt('Enter the password') ;
//    if(confirmPassword !== password){
//     alert('enter a valid password')
//    }
// }while(confirmPassword !== password)

// alert('login successfull') ;


//TODO TASK  Enter a choice : 
//1.hello 
//2.bye 
//3.leave or exit  :


//NOTE while  ;

const arr = ['ritesh','shubham','aman'] ;

let i = 0 ;

while(i < arr.length){
console.log(arr[i]);
i++
} ;

//for 
const num = [1,2,3,4,5] ;
for(let i = 0 ; i < num.length ; i++ ){
    if(i === 2){
     break ;
    }
    console.log(num[i])
}


//TODO TASK 2 const fruits = ['mango','grapes',
// 'papaya','watermelon'] ;

// fruits : 'mango'
// character 1 : m
// character 2 : a

// i < fruits.length
// j < fruits[i].length 

//NOTE Array methods : 

//NOTE push 

const numbersArray = [1,2,3,4,5] ;

const pushOutput = numbersArray.push(8);

console.log(numbersArray) ;

//note returns new array length 
console.log(pushOutput)

//pop 
const popOutput = numbersArray.pop() ;

//returns the last item which is removed from the array 
console.log(popOutput) ;


//NOTE unshift  ;

const unshiftOutput = numbersArray.unshift(8) ;

console.log(unshiftOutput) ;
console.log(numbersArray) ;

//NOTE Shift removes the first element

//NOTE includes return true or false ;

console.log(numbersArray.includes(5))

const namesArray = ['ritesh','utsav','aman','rahul','abhay'] ;

const newItem = 'aman' ;

if(!namesArray.includes('aman')){
     namesArray.push(newItem)
}else{
 console.log('already exist')
} ;

//NOTE slice to extract the part of the array 
//NOTe do not change the original array
//return endIndex - startIndex = element
const sliceOutput = namesArray.slice(1,4) ;
console.log(sliceOutput) ;
console.log(namesArray) ;

//splice method :(add,remove,replace) ;

const usernames = ['ritesh@123' , 'abc@123' , 'hello@123' 
]

//add 


const splicedOutput = usernames.splice(1,0,'test@123');
console.log(splicedOutput);
//gives output in the form of array 

console.table(usernames) ;

// note
// console.log(console)


//NOTE indexOf ;
//NOTe returns the index of the element value passed in the indexOf method
//NOTE if not available it will return -1
const indexOfOutput = usernames.indexOf('ritesh@123') ;

// console.log(indexOfOutput) ;


//NOTE FINDINDEX : (HIGHER ORDER METHOD);
//Higer order method => accepts function as a argument => callback => () => {}
//note if non of the element meet the required condition pass in the function which is used as argument then it will returns -1
const numberNewArray = [1,2,3,4,5] ;
const findIndexOutput = numberNewArray.findIndex((item)=>{
return item > 5
}) ;
console.log(findIndexOutput) ; 


//NOTE functions 


//FUNCTION DEClaration
console.log(window.sum(3,4));

function sum(a,b){
    return a + b 
}

console.log(window)
// hoisiting js
// sum(3,4);

//function expression
// console.log(substraction(4,7)) ;


//initail value of the var in hoisting is undefined

//the inital value of the function decalaration in hositing is function itself
// let const are in the tdz(temporal dead zone) till we assign value in the variable
// console.log(substraction(4,3)) ;
// const substraction = function(a,b){
//     return b-a
// }
// console.log(substraction(4,7))
// console.log(a)
//  var a = 4 ;


//arrow function
//single line and multi line
//NOTE when function body have multiples line we have to use the return keyword and {} ;
const multiply = (a,b) => {
const result = a*5 ;
return result; }
console.log(multiply(4,5)) ;

//when we have single params value
const print = a => a ;

console.log(print(5)) ;



//return keyword and {}

//NOTE forEach 

// callback = () => {}
const numbers = [1,2,3,4,5,6] ;
const forEachOutput = numbers.forEach((item)=>{
console.log(item)
})

console.log(forEachOutput)

//map , filter ,reducer 

//map higher order method 

//array of objects 

const userNames = [{firstName : 'abc' , lastName:'xyz'},{firstName : "test" ,lastName : 'tested'}]

const mappedResult = userNames.map((item)=> {
    return `${item.firstName} ${item.lastName}`
})

console.log(mappedResult) ;
console.log(userNames) ;

//NOTE filter (higher order method) ;

const productss = [{ProudctName : 'Mobile',productPrice : 33434 , category :'mobile'},{
    ProudctName : 'TV',productPrice : 33434 , category :'electronics'
},{ProudctName : 'Ac',productPrice : 33434 , category :'electronics'}] ;


const filterResult = productss.filter((item)=>{
return item.category === 'electronics'
})

console.log(filterResult) ;
console.table(productss) ;

//NOTE find 

//find method returns the current item which matches the condition first
//filter returns all the item which matches the condition in the callback function in an array
const findResult = productss.find((item)=>{
return item.category === 'electronics'
})

console.log(findResult) ;

//NOTE reduce


const numArray = [7,2,3,4,5,6] ;

const reduceMethod = numArray.reduce((accumulator,currentItem)=>{
console.log(accumulator,currentItem)
return accumulator + currentItem
},0)

console.log(reduceMethod) ;

const carItem = [{proudctName : 'shirt',price:500,quantity : 3,inStock : true},{proudctName : 'jeans',price:1150,quantity:5,inStock : false}]

// return accumulator + (item.price * item.quantity)

//some returns true or false 

const someResult = productss.some((item)=>{
return !item.inStock
})
console.log(someResult)

//every
const everyResult = productss.every((item)=>{
return item.inStock
})
console.log(everyResult) ;  


//reversed , sort

const numarr = [1,2,3,4,8,45,98] ;
// console.log(numarr.reverse()) ;
console.log(numarr.toReversed())
console.log(numarr)

//toReversed , toSpliced , toSorted

//sort 
console.log(numarr.sort((a,b)=>{
    console.log(a,b)
 return b-a ;  

})) ;

//NOTE DESTRUTURING OF ARRAY : 
const companies = ['google','netflix','meta'];

// const company1 = companies[0] ;
// const company2 = companies[1] ;
// const company3 = companies[2] ;

//NOTE destructuring in array 
//NOTE in an array destructuring happens on the basis of index position.
const [comapany1, ,company2,] = companies

console.log(comapany1,company2) ;

//default 
const names = ['ritesh','aman','utsav','pankaj','abhay'] ;

// const [frnd1, frnd2,frnd3,frnd4,frnd5='shubham'] = names ;



// console.log(frnd5) ;

// (...rest parameter)

const [frnd1, frnd2, ...remaining] = names ;


console.log(frnd1 ,frnd2,remaining) ;

//NOTE useCase using rest paramter in the function params
function looparr(...items){
    //rest params packs the items in an array then we can loop on it
    console.log(items)
    items.forEach((item)=>{
        console.log(item)
    })
}

looparr(1,2,3,4,5,6,7) ;




























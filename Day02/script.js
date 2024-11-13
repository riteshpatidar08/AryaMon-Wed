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





















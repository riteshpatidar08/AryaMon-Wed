//Destruturing in Object : 
const gadget = {
    type  : 'smartwatch',
    company : 'samsung',
    features : ['Sleep Tracker','Heart rate monitor'] ,
    battery : '24hr' ,
    variant : {
        color  : 'red'
    }
}

//NOTE in Object destruturing performs on the basis of the key name :
const {company:companyName ,type,color='blue'} = gadget ;

console.log(type,companyName,color) ;


//NOTe spread operator (...) ;

//Array (spread operator) ;

const arr = [1,2,3,4,5] ;

//NOTe copying an array ;

// const arr2 = arr ;  
// console.log(arr2)

// console.log(arr)
// arr2.push(6)
// console.log(arr2);
// console.log(arr) ;

const arr2 = [...arr] ;
console.log(arr2) ;

arr2.push(6);
console.log(arr)
console.log(arr2) 

//merging two two array : 

const a1 = [1,2,3,4,6] ;
const a2 = [6,7,8,9,10] ;

const a3 = [0,...a1,...a2] ;
console.log(a3) ;


// const obj1 = {
//     firstName : 'ritesh'
// }

// const obj2 = {
//     firstName :'abc'
// }

//TODO imp
// const obj3 = {...obj1 , firstName : 'test'}
// console.log(obj3) ;


//NOTE Object methods 

const gadget2 = {
    type  : 'smartwatch',
    company : 'samsung',
    features : ['Sleep Tracker','Heart rate monitor'] ,
    battery : '24hr' ,
  
}

//Object.keys()
// const keys = Object.keys(gadget2)
// keys.forEach((key)=>{
// console.log(key)
// })

//chaining of the methods
Object.keys(gadget2).forEach(key=> console.log(key)) ;




// Object.values()

Object.values(gadget2).forEach((value)=>{
    console.log(value)
})


//OBject.entries 
// [['type''smartwatch],['company''samsung']]

const entries = Object.entries(gadget2) ;

entries.forEach((entry)=>{
   const [key,value] = entry ;
   console.log(`${key}:${value}`)
})

//Object.assign
const obj1 = {
    productName : 'tv'
}

const obj2 ={
    productPrice : 45345
}
//merge 
console.log(Object.assign(obj1,obj2))
 ;

 //copy an object
 const obj3 = Object.assign({},obj1,obj2)
 console.log(obj3)
 

 //NOTE STRING METHOD : 

 const str = 'we are learning js'  ;

 console.log(str.length) ;
 console.log(str[1]) ;

 //Note chartAt

console.log(str.charAt(0)) ;

//NOte includes

const email = 'ritesh@gmail.com' ;

console.log(email.includes('@'));

//NOTE toUppercase() to lowerCase

console.log(email.toUpperCase())
console.log(email.toLowerCase())


//NOTE split
const newStr = 'my name is ritesh' ;
console.log(newStr.split(' '))

const filePath = 'users/downloads/image'
const [folder , ,file] = filePath.split('/') ;
console.log(folder,file) ;

//NOTE slice 
console.log(newStr.slice(5,1)) ;
console.log(newStr.substring(5,1)) ;

//NOTE my name is ritesh ;

//NOTE split => map =>  transformation => join

const strng = 'my name is ritesh' ;

const strArry = strng.split(' ') ;
console.log(strArry)

const mappedOutput = strArry.map((element)=>{
   return element.charAt(0).toUpperCase() + element.slice(1);

})

console.log(mappedOutput.join(' ')) ;

//endsWith //startWith 

const url = 'https://www.google.com'

console.log(url.endsWith('.com'))
console.log(url.startsWith('https'))

//trim => trimEnd trimstart

const greet = '     hello     ' ;
console.log(greet.trimStart())
console.log(greet.trimEnd())
console.log(greet.trim()) ;


//padStart and padEnd ;

const spinner = "Loading " ;
console.log(spinner.length)
console.log(spinner.padEnd(15,'.')) ;


const cardNumber = '3454546567876543' ;

const sliceNumber = cardNumber.slice(-4) ;
console.log(sliceNumber.padStart(16,'*')) ;

console.log(spinner.repeat(3)) ;

//replace 

const greeting = 'hell how is is you'

console.log(greeting.replaceAll('is','are'))


//search 
const para =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum quod voluptas tenetur, error earum architecto aspernatur, officia aliquam voluptatem molestiae quo optio eius ratione et eos consectetur neque iusto.'
console.log(para.search('ipsum')) ;

const password = 'ritesh@123'
console.log(password.match(/[0-9]/))


//'Javascript is a synchronous language' ;
//NOTE find the longest word in a string  using reducer method
//NOTE method reduce:

//NOTE MATH OBJECT : 

//NOTE MATH.ABS() ;

console.log(Math.abs(-7)) ;

//MATH>ROUND 
// .1 => .4 => downwards .5 => .9 upper
console.log(Math.round(1.6)) ;

//Math.trunc() ;
//only remove the decimal values 
console.log(Math.trunc(-5.9)) ;

//Math.floor  //always round off to the downwards value
console.log(Math.floor(-5.9)) ;

//Math.ceil 
console.log(Math.ceil(5.2)) ;

//Math.random 
console.log(Math.trunc(Math.random() * 6)) ;

//Math.pow

console.log(Math.pow(2,3)) ;

console.log(Math.PI) ;


//DATE OBJECT : 

const date = new Date() ;
console.log(date.getDay()) ; 0-6 ;
 
console.log(date.getMonth() + 1)

console.log(date.getFullYear())
console.log(date.getDate()) ;

const currentTime = Date.now() ;
console.log(new Date(currentTime))

console.log(new Date('12-feb-2023')) ;





 




























// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const password = document.getElementById('password') ;

// form.addEventListener('submit',function(event){
//     console.log(this)
//     event.preventDefault();

//     const formData  = {
//         username : username.value ,
//         password : password.value
//     }
//     console.log(formData)
// })

// //this keyword

// // console.log(this) in the global scope this will point to window object

// function demo(){
//     console.log(this)
// }

// demo()

// //in normal mode when this is used in the function declARATION it willl poin to window oject

// //in strict mode it will point to undefined

// const greet = () => {
//     console.log(this)
// }

// const obj = {
//     firstname : 'ritesh',
//     printname : ()=>{
//         console.log(this.firstname)
//     }
// }

// obj.printname() ;

//asynchronous js

// console.log('step1')
// setTimeout(function(){
//     alert('hi')
// },5000)
// console.log('step3')

//callback

function greet(callback) {
  callback();
}

function msg() {
  console.log('this is callback function called by higher order function');
}

//promises => object => properties , methods

//promises => pending , fulfilled , rejected

//we can create a promise

const willYouPassInExam = new Promise((resolve, reject) => {
  reject('you are fail in exam');
});

console.log(willYouPassInExam);

willYouPassInExam
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('always run'));

// if promise fulfilled or rjected  you have handle both the cases.

//fulfilled => then() ;
//reject => catch() ;

function fetchData() {
  const data = { username: 'test@123' };
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.4) {
      resolve(data);
    } else {
      reject('data fetching failed');
    }
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//   https://restcountries.com/v3.1/all

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const h1 = document.createElement('h1');
      h1.textContent = country.name.common;
      document.body.appendChild(h1);
      const option = document.createElement('option');
      option.textContent = country.name.common;
      const select = document.getElementById('select');

      select.append(option);
    });
  });

// //DOM =>

// // DOCUMENT OBJECT MODEL

// // console.log(document.body.h1)

// //NOTE => select

// //NOTE getElementsByTagName

// const h1 = document.getElementsByTagName('h1');

// // h1.forEach((el)=>{
// //     console.log(el)
// // }) ;

// console.log(h1);
// // console.log([1,2,3,4])

// const usingClass = document.getElementsByClassName('heading');

// console.log(usingClass);

// const usingId = document.getElementById('heading_first');

// // console.dir(usingId)

// //NOTE querySelector

// const usingQuerySelector = document.querySelector('.heading');

// console.log(usingQuerySelector);

// const usingQuerySelectorAll = document.querySelectorAll('.heading');

// console.log(usingQuerySelectorAll);

// usingQuerySelectorAll.forEach((el) => {
//   el.innerHTML = 'hello';
// });

// //text update
// //innerText , textContent , innerHTML

// //NOTE textContent

// const h2 = document.getElementById('heading_second');

// console.log(h2.textContent);

// console.log(h2.innerText);

// h2.innerHTML = `<p>innerHTML</p>`;

// //src , href :
// const link = document.getElementsByClassName('link');

// console.log(link[0]);

// link[0].href = 'https://www.amazon.in';
// link[0].textContent = 'Amazon';

// //.src property needs to be update

// //NOTE value

// const inputEl = document.getElementsByClassName('username');

// console.log(inputEl[0].value);

// const inputCheckBox = document.getElementById('checkbox');

// console.log(inputCheckBox.checked);

// //NOTE CREATE ELEMENT

// //decide which element to create
// //decide what text to goes inside the element
// //decide where to element you are going to place

// //create an element

// const para = document.createElement('p');
// const container = document.getElementById('container');
// para.textContent = 'lorem ipsum';
// console.log(para);

// const heading = document.createElement('h1');
// heading.textContent = 'CS';

// //NOTE appendChild

// // container.appendChild(para)

// //NOTE append child only adds one element at a time
// // container.prepend(heading)

// //NOTE prepand always add at the starting of the selected element

// container.append(heading, para);
// //NOTE we can add multiple elements at one time using append method

// //insertBefore
// //insertAdjacentElement
// //insertAdjacentHTML

// //NOTE create a card using js which have a image , title , description and a button

// //NOTE card => img tag , h2 tag , p tag , button tag  => append to card => append card to body or any container tag

// const list = document.getElementById('list');
// const firstItem = document.getElementById('first');
// const secondItem = document.getElementById('second');

// console.log(list);

// const li = document.createElement('li');
// li.textContent = 'added using js';

// // list.insertBefore(li,secondItem)
// //beforestart , afterend  , beforeend ,afterstart

// list.insertAdjacentElement('afterend', li);

// //attribute update :

// {/* <input type='text' placeholder ='enter something'/> */}

// const input = document.createElement('input') ;

// input.setAttribute('type','text')
// input.setAttribute('placeholder','enter something')

// console.log(input)

// //void elements =>

// console.log(input.getAttribute('type')) ;

// const arr = ['color','fontSize'] ;
// const properites = ['red','56px','']

// arr.forEach((el,index)=>{
//     heading.style[el] = properites[index]
// })

// //EVENTS :

// //two ways to apply

// const btn = document.getElementById('btn') ;

// console.dir(btn)

// btn.onclick = function(){
//     console.log('hello from js')
// }

// // addeventListener

// // btn.addEventListener('click',function(){
// //     console.log('hello from event listener')
// // })
// // btn.addEventListener('click',function(){
// //     console.log('hello from event listener - 2')
// // })

//mouse events

//dbl , mouseenter , mouseleave

const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('mouseenter', function () {
  output.textContent = 'mouse enter';
});

btn.addEventListener('mouseout', function () {
  output.textContent = 'mouse out';
});
btn.addEventListener('dblclick', function () {
  output.textContent = 'double click happens';
});

//input

const input = document.getElementById('username');

//focus

input.addEventListener('focus', function () {
  output.textContent = 'input field is focused';
  input.setAttribute('class', 'border border-red-500');
});

//blur

input.addEventListener('blur', function () {
  output.textContent = 'input field is blur';
});

//input event
input.addEventListener('input', function (event) {
  console.log(event.target.value);
});

//form submit
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('hello');
});


//create a form in the html use two fields one for username and other for password
//on form submit handle the submit event and console.log() both  the fields value eg: username : value , password : value


// const formData = {
//   username : username.value
// }

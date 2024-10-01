// function changeContent(){
//     document.getElementById("chnageContent").innerHTML = "Hello JavaScript";
// }
// function changeAttr(){
//     // document.getElementById("changeAttr").id = "idChange";
//     console.log(document.getAttribute('class'));
// }
// let first_name = 5;

// let x = 16 + 'Mohit';
// let y = 123e-5
// let cars = ['Tata', 'Suzuki', 'Hondai'];
// let bikes = [
//     { name: 'Splender', color: 'Black', modal: '2015' },
//     { name: 'Passion', color: 'Red', modal: '2021' },
// ];
// const detaile = {
//     name: "Mohit",
//     age: 24,
//     materialStatus: 'Single'
// }   
// let z = myFuction(4 , 3)
// function myFuction(a, b){
//     return(a * b)
// }

// let text = "";
// for(let x in bikes){
//     text += bikes[0][x] + " "
// }

// for(let i = 0; i > detaile.length; i++){
//     console.log(i);
// }


// // const numbers = [10, 20, 30, 40];

// // let txt = "";
// // numbers.forEach(myFunction);
// // console.log(txt);
// // document.getElementById("demo").innerHTML = txt;
// // function myFunction(value, index, array){
// //     txt += value + " "
// // }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
// }

// // setTimeout(function(){
// //     alert('Hii i am set time out')
// // }, 3000)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr);

// console.log(arr.reduce((total, currentValue)=> total + currentValue));

// let fruits = ["apple", "bannana", "mango"]
// fruits.length = 2;
// console.log(fruits);

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000)
// }

// console.log(null);

const userInfo = [
    {
        name: 'Mohit',
        age: 22
    },
    {
        name: 'Rohit',
        age: 24
    }
]
const studentInfo = [
    {
        name: 'Mohit',
        age: 22,
        subject: ['Marathi', 'Hindi', 'English']
    },
    {
        name: 'Rohit',
        age: 24
    }
]

// let firstName = 'Mohit';
// let lastName = 'Hatzade';
// let fullName = firstName.concat(' ', lastName)
// console.log(fullName);

const newString = new String('Mohit Kundlik Hatzade')
const regex = /[A-Z]/g
console.log(newString.match(/[A-Z]/g));
// console.log(newString.length);
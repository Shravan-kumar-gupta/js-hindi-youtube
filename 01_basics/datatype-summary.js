// Primitive Datatype 
// 7 types :String , Number , Boolean , null , undefined , Symbol , BigInt 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail; 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 123534645476547547547475447457n
console.log(typeof(bigNumber))

// Reference Type / Non Primitive Type :
// Array , Objects , Functions ,Date , Map , Math

const heroes = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "Sk",
    age : 23,
}
const myFuntion = function  (params) {
  console.log("Hello world ")
}
console.log(typeof(myFuntion))


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory 
//  Stack(primitive) , Heap(non primitive)

let myYoutubename = "hitechchaudhaydotcom"
let anotherName  = myYoutubename;
console.log(anotherName)

let userOne  = {
  email : "user@google.com",
  upi :   "user@ybl"
} 
let userTwo  = userOne
userTwo.email = "hitesh2gmail.com";
console.log(userOne.email)
console.log(userTwo.email);


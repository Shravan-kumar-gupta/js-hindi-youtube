function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()  

// function addTwoNumber(number1 , number2){
//    console.log(number1 + number2);
// }
// function addTwoNumber(number1 , number2){
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumber(10,5)
// console.log("Result : ",result);

function loginUserMessage(username = 'Sam')
{
    if(username === undefined){
       console.log(`Please Enter a USer Name `);
       return 
    }
    return  `${username} just logged in`
}
console.log(loginUserMessage())




const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website `);
        console.log(this);     // current context   
    },
     HelloMessage : () =>{
        console.log(`${this.username},welcome to website `);
        console.log(this);       // global object (parent's scope)
    }
}
// user.welcomeMessage() // current context here is for this keyword = "hitesh"
// user.HelloMessage() 
// user.username = "sam"
// user.welcomeMessage()  // current context here is for this keyword = "sam"

console.log(this); // empty object for node context  // window object for browser console context
 
// function chai(){
//     let username  = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username  = "hitesh"
//     console.log(this.username);   
// }
// chai();


// const chai = () => {
//     let username  = "hitesh"
//     console.log(this);   
// }
// chai(); 

// const addTwo = (num1,num2) => {
//    return    num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(5,3))

// const returnObject = () => ({name : "HITESH"})
// console.log(returnObject());

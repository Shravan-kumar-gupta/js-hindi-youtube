function calculateCartPrice(val1,val2,...num1){
   return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));
const user =  {
    username  : "hitesh",
    price : 199
}
function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username  : "sam",
    price : 399
}
);
const mynewArray = [200,400,100,600];

function returnSecondValue(getArray){
  return getArray[0];
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,100,600]));

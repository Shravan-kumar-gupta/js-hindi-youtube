function one(){
   const username = "Hitesh"
   
   function two(){                 // nesting of function ()
      const website  = "YouTube"
      console.log(username);          //lexical scope
   }
//    console.log(website);
//    two()
}
one()

if(true)
{
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++++++++ Intresting  ++++++++++++++++++++++++++++++++++

// Hoisting

console.log(addOne(5))
function addOne(value){
    return value + 1
}

// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }


// Closure  and lexical Scoping
 
function init(){
    const name = "Sk"
    function displayName(){
      console.log(name);
    }
    return displayName;
}
myFunc = init();
myFunc();

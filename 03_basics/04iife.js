//  Immediately Invoked Function Expression (IIFE)

(function chai(){  // Named IIfe
        console.log(`Db Connected`);       
})();

// ()()
// first parenthesis () = function definition
// second definition ()  = function calling

// na kewl immediatley invoked ke lie blki global scope k pollution ko htane k lie hum iife()() ka use krte h 

// Arrow function :
((name)=>{ // Unnamed IIfe
    console.log(`Db connected ${name}`);
    
})('Shravan Bhai')
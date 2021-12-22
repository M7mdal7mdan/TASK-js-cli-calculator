const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number1 = prompt("Enter the First number:");
const number2 = prompt("Enter the Seconde number:");
const operation = prompt("Enter the Operation:(+,-,*,/)");

if(operation=="+") {
    let sum = 0;
     sum = +number1 + +number2;
    console.log("number1"  ,  "operation"  , "number2", " ="  ,   sum );

}
else if(operation=="-") {
    let sum = +number1 - +number2;
    console.log("number1"  ,  "operation"  , "number2", " ="  ,  sum  );
}

    else if(operation=="/") {
        let sum = +number1 / +number2;
        console.log("number1"  ,  "operation"  , "number2", " ="  ,  sum  );
    }

        else if(operation=="*") {
            let sum = +number1 * +number2;
            console.log("number1"  ,  "operation"  , "number2", " ="  ,  sum  );
        }
        else console.log("you are not enter the right operation");

            
            
            
        
    


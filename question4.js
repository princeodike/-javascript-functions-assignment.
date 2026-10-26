// 1. Regular function declaration

greet1();

function greet1() {
    console.log("Hello! Welcome.");
}


// 2. Arrow function assigned to a const variable

greet2(); 

const greet2 = () => {
    console.log("Hello! Welcome to JavaScript.");
};

// The greet1 worked perfeclty because it was hoisted 
// The greet2 didnt work, it shows a ReferenceError this is because you cannot call an arrow function before defining it. 

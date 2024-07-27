//In this file we will create a method in which we will develop a method in which user can choose what opertaion he chooses to perform

// Let's Begin 

//First we will get input from user 

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    r1.close();
});


const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



r2.question('Age: ', (age) => {
    console.log(`Your age is : ${age}`);
    r2.close();
    if (age < 18) {
        console.log("Sorry you are minor !")
    }
})




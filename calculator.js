//In this file we will create a method in which we will develop a method in which user can choose what opertaion he chooses to perform

// Let's Begin 

//First we will get input from user 

const { copyFileSync } = require('fs');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Name: ", (name) => {
    console.log(`Welcome ${name} !`);

    //Now we will add the question for age 

    r1.question("Age: ", (age) => {
        console.log("Good to hear that !");

        //First we will get the  values on which operation is needed to be performed
        r1.question("Value 1: ", (val1) => {
            //Now we will ask the second value 
            r1.question("Value 2: ", (val2) => {
                console.log(`Value 1 you entered is : ${val1}`);
                console.log(`Value 2 you entered is : ${val2}`);

                //Now we will describe the keys to trigger operations
                console.log("Addition       : A/a");
                console.log("Subtraction    : S/s");
                console.log("Multiplication : M/m");
                console.log("Division       : D/d");
                //Now we will define the codes that will ask for input for declaring operation

                r1.question("Operation: ", (op) => {
                    //Now we will declare if statements
                    if (op == 'A' || op == 'a') {
                        var sum = 0;
                        sum = val1 + val2;
                        console.log(`Sum: ${sum}`);
                    } else if (op == 'S' || op == 's') {
                        var diff = 0;
                        diff = val1 - val2;
                        console.log(`Difference is: ${diff}`);
                    } else if (op == 'M' || op == 'm') {
                        var pro = 0;
                        pro = val1 * val2;
                        console.log(`Product is: ${pro}`);
                    } else if (op == 'D' || op == 'd') {
                        if (val2 == 0) {
                            console.log("Cannot divide with zero");
                        } else {
                            var div = 0;
                            div = val1 / val2;
                            console.log(`Result is : ${div}`);
                        }
                    }
                })
            })
        })




    });
})
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

//Let us add the function 
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

//Now we will run the factorial  function

factorial(8);

// Now we will check type of entered data 

console.log(typeof (4.5));

console.log(`Half of 100 is : ${100 / 2}`);
console.log(typeof ("24"));
console.log(typeof (4));

console.log(3 > 2);
console.log(2 < 3);

console.log("Advark" < "Zoroaster");


//Now we will check not equal operator
console.log("itchy" != "Scratchy");
// Now we will check the equal operator 
console.log("Apple" == "Orange");

// Now we will learn about logical operators 
console.log(true && false);
console.log(true && true);

// "&&" is an "And operator" which means that it will only give true values or process the result if the all given values are true 

// Now we will learn about or operator 
console.log(true || false);

console.log("True and False ");
console.log("Fuck everything and i will start");
console.log("Let me be honest computer some people are so bad that they killed your vibe to survive .");
console.log("We learn to code and the code begins when the things goes wrong .");
console.log("No one gives a fuck to me and the fact is that it is the best thing to hate and the fact is that i just hate everyone .");
console.log("I have just lost the hunger to live to achieve i dont know what is happening to me but the fact is i have just lost the fact that i am ");
console.log("Let us write the fact let us fuck the world we will never let the world down ");
console.log("They killed my vibe to live and everyone is just a peice of shit i am unable to focus on my work everything feels like shit ");
console.log("Let us make the console run the ");
console.log("Let us code the fact ")



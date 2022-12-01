/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

// header function

function headerTitle(stringTitle, stringBorder){
    console.log("\n",stringBorder + stringBorder + stringBorder + stringTitle + stringBorder + stringBorder + stringBorder,"\n");
   
}



/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
headerTitle("Exercise 1", "~~");

// input = 2 numbers , l1 & l2
// output = 1 number , area 

function containerArea(l1,l2){
    return l1 * l2;
}

let area1 = containerArea(45,20);

console.log("Area of rectangle: ", area1);



/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

headerTitle("Exercise 2", "~~");
function crazySum(num1, num2){
    if (num1 === num2) {
        let totalSum3 = (num1 + num2) * 3;
        console.log("Values are the same and so they are multiplied by 3: ", totalSum3);
        return totalSum3;
    } else {
        let totalNum1 = num1 + num2;
        console.log("Total sum of the two values are: ", totalNum1);
       return totalNum1;
    }
}

crazySum(44, 21);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
headerTitle("Exercise 3", "~~");
function crazyDiff(givenNum){
    let diffNum;
    //check if givenNum is less than 19
    if (givenNum <= 19) {
        diffNum = 19 - givenNum;
        console.log(`The difference between 19 &  ${givenNum} is: ${diffNum} `);
    } else {
        //if givenNum is greater or equal to 19 * 3
        let diffNum3 = (givenNum - 19) * 3;
        console.log(`The difference between ${givenNum} and 19 is: ${diffNum3}`);
    }
}
crazyDiff(34);


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
headerTitle("Exercise 4", "~~");
function boundary(n){
    if (n >= 20 && n <= 100) {
        console.log(`${n} is within 20 or 100`);
    } else if(n == 400){
            console.log(`${n} is equal to 400`);
        }
        else{
            console.log(`${n} is neither one`);
        }
    };

boundary(2);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

headerTitle("Exercise 5", "~~");
function strivify(stringText){
    if (stringText === "Strive") {
        console.log(`The given text ${stringText} is already the word.`);
    } else {
        let finalText = "Strive" + stringText;
        console.log(`The given text will have Strive added to it: ${finalText}`);
    }
}

strivify("Certain");


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
headerTitle("Exercise 6", "~~");
function check3and7(positiveNum){
    if (positiveNum % 3 == 0 || positiveNum % 7 == 0) {
        console.log(`${positiveNum} are multiples of 3 or 7`);
        return true;
    } else {
        console.log(`${positiveNum} are not numbers multiple of 3 or 7`);
        return false;
    }
};

check3and7(66);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

headerTitle("Exercise 7", "~~");
function reverseString(stringNorm){ 
    let stringRev = "";
    for (let i = stringNorm.length - 1; i >=0 ; i--) {
       stringRev += stringNorm[i];
    }
    console.log("Reversed String: ", stringRev)
    return stringRev;
}

reverseString("Hello world!");


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
headerTitle("Exercise 8", "~~");
function upperFirst(stringUpper){

    let stringCut = stringUpper.split(" ");
    for (let i = 0; i< stringCut.length; i++) {
      stringCut[i] = stringCut[i][0].toUpperCase() + stringCut[i].substr(1);
    }
    return stringCut.join(" ");
}

console.log(upperFirst("hi my name is jovellyn"));


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
headerTitle("Exercise 9", "~~");
function cutString(enterStr){
    let removedStr="";
    for(i=1;i<enterStr.length-1;i++){
        removedStr+=enterStr[i]
    }
    return removedStr;
}

console.log(cutString("Jovellyn"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
headerTitle("Exercise 10", "~~");
function giveMeRandom(number){
    let arrayOfNums= [];
    for (let i = 0; i < number; i++) {
        arrayOfNums.push(Math.floor(Math.random() * 10));
        
    }
   return arrayOfNums;
}
 console.log(giveMeRandom(9));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

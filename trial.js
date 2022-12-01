/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
// INPUT = number N
// OUTPUT = give an array (list) of random number between 0 and 10

function giveMeRandom(number){
    let arrayOfNums= [];
    for (let i = 0; i < number; i++) {
        arrayOfNums.push(Math.floor(Math.random() * 10));
        
    }
   return arrayOfNums;
}
 console.log(giveMeRandom(9));

//console.log(Math.random()) // returns a random number between 0 (included) and 1 (excluded):

// Example of possible result: 0.956415945820096
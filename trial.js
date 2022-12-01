/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/


function giveMeRandom(number){
    let arrayOfNums= [];
    for (let i = 0; i < number; i++) {
        arrayOfNums.push(Math.floor(Math.random() * 10));
        
    }
   return arrayOfNums;
}
 console.log(giveMeRandom(9));

 function checkArray(number1) {
    return number1.reduce(function (sum, num) {
      if (num > 5) {
        console.log(num  + " is greater than 5");
        return sum + num;
      }
      return sum;
    }, 0)
}

console.log(checkArray(giveMeRandom(3)));
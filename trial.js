/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

// INPUT = number N
// OUTPUT = 
// 1) if 20 <= n <= 100 
// 2) n = 400


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

crazySum(3, 3);
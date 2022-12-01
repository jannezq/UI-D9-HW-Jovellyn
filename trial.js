/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

// INPUT = 1 number , givenNum
// OUTPUT = 
// 1) returns the difference by 3 if greater than 19


function crazyDiff(givenNum){
    //check if givenNum is less than 19
    if (givenNum <= 19) {
        return 19 - givenNum;
    } else {
        let givenNumBy3 = (givenNum - 19) * 3;
        return givenNumBy3;
    }
}

console.log("difference is: ", crazyDiff(44));
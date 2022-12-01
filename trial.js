
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
// INPUT = string
// OUTPUT = reverse string


function reverseString(stringNorm){ 
    let stringRev = "";
    for (let i = stringNorm.length - 1; i >=0 ; i--) {
       stringRev += stringNorm[i];
    }
    console.log("reversed string: ", stringRev)
    return stringRev;
}

reverseString("Hello world!");

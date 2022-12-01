/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

// INPUT = number N
// OUTPUT = 
// 1) if 20 <= n <= 100 
// 2) n = 400

function boundary(n){
    if (n >= 20 && n <= 100) {
        console.log(`${n} is within 20 or 100`);
        return true;
    } else{
        if(n == 400){
            console.log(`${n} is equal to 400`);
            return true;
        }
        else{
            console.log(`${n} is neither one`);
            return false;
        }
    }
};

boundary(2);

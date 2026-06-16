// write a function that counts number of digits in a number
// n = 1234567 
// O/P = 7;
function countDigits(n){
    // handling corner cases if n = 0 than it should work
    if(n == 0) return 1
    // handling negative numbers else will not go inside loop
    n = Math.abs(n)
    let count = 0;
    while(n > 0){
        // we can divide a number by 10
        // If not Math.floor() than 259 will be 25.9 we need 25.
        n = Math.floor(n/10);
        count ++
    }
    return count
}
console.log(countDigits(-0))
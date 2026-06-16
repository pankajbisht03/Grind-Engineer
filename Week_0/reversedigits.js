// Write a function that reverses a number;
function reverseDigit(n) {
    // -123 should be -321 so handling this case
   
    let rev = 0;
    let copyn = n
    n = Math.abs(n)
    if(n < 0) return 
    while (n > 0) {
        let lastDigit = n % 10
        rev = (10 * rev) + lastDigit
        n = Math.floor(n / 10);

    }
    let negativeValues = ( (copyn < 0) ?   -rev : rev)
    return negativeValues
}

console.log(reverseDigit(-211))
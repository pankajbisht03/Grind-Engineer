function isPalindrome(n)  {
    if(n < 0 ) return false
    let reverse = 0
    let nCopy = n
    while( n > 0){
        //this will give remainder as 10 will give the last digit in remainder 
        let remainder = n % 10;
        reverse = (10*reverse) + remainder;
        n = Math.floor(n/10)
    }
    return nCopy === reverse

}

console.log(isPalindrome(1221))
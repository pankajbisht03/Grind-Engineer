//Input = [3,0,1] numbers in array are distinct
//output = 2;

// sum of n numbers  = n (n+1)/2;
//we have input length;
//we can sum n numbers and subtract with given array sum 
// Missing Number = calculated n number sum - sum of given input;

function missingNumber(arr){
    let n = arr.length
    let totalSum = n * (n+1)/2;
    let partialSum = 0;
    for(let i = 0; i < arr.length ; i++){
        partialSum  +=  arr[i]
    }
    let missingNumber = totalSum - partialSum;
    return missingNumber
}
console.log(missingNumber([3,0,1]))
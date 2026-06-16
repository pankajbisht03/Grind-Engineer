//Input = [ 1,1,0,1,1,1];
//Output = 3;
function maxConsecutiveDigit(arr){
    let currenCount = 0;
    let maxCount = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            currenCount ++ 
        }else{
            maxCount = Math.max(currenCount,maxCount);
            currenCount = 0
        }
    }
    return Math.max(currenCount, maxCount)
}
console.log(maxConsecutiveDigit([1,1,0,1,1,1]))
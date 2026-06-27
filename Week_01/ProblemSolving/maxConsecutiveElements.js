function countMaxConsecutive(arr, ele){
    let count = 0;
    let maxCount = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ele){
            count++
        }else{
            maxCount = Math.max(count, maxCount);
            count = 0
        }
    }
    return Math.max(count, maxCount)

}
console.log(countMaxConsecutive([12,2,2,1,2,2,2,1,1,1,2,1,2,4,5,2,45,3,3,3,3,1,],2))


//[2,1,2,2,2,1,2]
function findMaxOccuredElement(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            return arr[i]
        }else{

        }
    }
}
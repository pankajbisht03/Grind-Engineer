function findLargest(arr){
    let largest = -Infinity
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([-1,-2,-4,-2,-4,-6,-9,-3,-10,-2]))
let arr = [1,4,2,1,4,5,3,0,10,4];
function findLargest(arr) {
    let largest = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }

    }
    return largest
    
}

console.log(findLargest(arr));

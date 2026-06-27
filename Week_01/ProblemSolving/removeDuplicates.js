function removeDuplicates(arr){
    const uniqueArray = new Set(arr); 
    //O(n) time complexity and O(n) space complexity
    return [...uniqueArray]
}

function findUnique(arr){
    let seen = {};
    let result = [];
    for(let i = 0; i < arr.length; i++){
        console.log(seen, "seen")
        if(!seen[arr[i]]){
            seen[arr[i]] = true;
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([2,1,3,4,2,4,6,3,3,2,0,9,8,97,9,8]))
console.log(findUnique([2,1,3,4,2,4,6,3,3,2,0,9,8,97,9,8]))
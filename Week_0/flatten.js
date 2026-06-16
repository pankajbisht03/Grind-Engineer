function flattenDeepNestedArray(arr){
    return arr.reduce((acc,curr) => {
        if(Array.isArray(curr)){
            return acc.concat(flattenDeepNestedArray(curr))
        }else{
            return acc.concat(curr)
        }
    },[])
}
console.log(flattenDeepNestedArray([1,2,[3,4,5,[4,5]]]))
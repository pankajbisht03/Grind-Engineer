function removeDuplicates(arr) {
    // will be using two pointers approach 1st pointer to compare and replacing the values
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        // comparing if previous value is greater than previous one
        if (arr[i] > arr[x]) {
            // if yes increasing previous index
            x++;
            //replacing the arr with index x and adding the greater value
            arr[x] = arr[i]
        }
    }
    // count of duplicates will be number of times the last value is less than current value
    return x + 1

}
console.log(removeDuplicates([0,0,1,2,2,3,4,4,6,6,7,8,9,9])) // 9
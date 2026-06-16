// INPUT - [0,1,3,12,0,2];
//output = [1,3,12,2,0,0];
function removeZeroes(arr) {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i];
            x++
        }
    }
    for (let i = x; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}
function moveZeroes(arr) {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i]
            x++;
        }
    }
    for (let i = x; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
};

// console.log(moveZeroes([0, 1, 0, 3, 13]));
// console.log(removeZeroes([0, 1, 0, 3, 13]));
// 🔯 Write a function that searches for a element in an array and returns the index, if element is not present  then return -1
const inputArray = [4, -2, 0, 10, 8, 30, -1, 9, -3];
const searchedArray = 30;

function searchElement(input, searchEle) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === searchEle) {
            return i
        }

    }
    return -1
};

const P1 = searchElement(inputArray, searchedArray);
const P2 = searchElement(inputArray, 1);

// console.log(P1, P2);
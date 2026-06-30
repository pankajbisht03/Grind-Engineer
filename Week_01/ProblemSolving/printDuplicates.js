let inputStr = "geekforgeeks";

function printDuplicates(inputStr) {
    let freq = {};
    for (let char of inputStr) {
        freq[char] = (freq[char] || 0) + 1
    }
    for (let char in freq) {
        if (freq[char] > 1) {
            console.log(`${char} count: ${freq[char]}`)
        }
    }
}

printDuplicates(inputStr);
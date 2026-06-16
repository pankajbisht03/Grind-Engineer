function bestTimeBruteForce(arr){
    let maxProfit = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i ; j < arr.length;j++){
            const profit = arr[j]-arr[i];
            if(profit > maxProfit){
                maxProfit= profit
            }
        }
    }
    return maxProfit
}
console.log(bestTimeBruteForce([2,1,4,6,9]))

function bestTimetoBuyStock(arr){
    let min = arr[0];
    let maxProfit = 0
    for(let i=1; i < arr.length; i++ ){
        if(arr[i] - min > maxProfit){
            maxProfit = arr[i] - min
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return maxProfit
}
console.log(bestTimetoBuyStock([2,1,4,6,9]))

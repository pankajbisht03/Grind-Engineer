//currying is technique in js where a function with multiple arguments is transformed into a sequence of functions each taking single arguments.

function sum(...a){
    let total = a.reduce((acc, curr) => acc + curr, 0)
    console.log(a, "a")
    return function inner (...b){
        if(b.length == 0){
            return total
        }
        const nextTotal = b.reduce((acc, curr) => acc + curr, 0)
        return sum(total+nextTotal)
    }
}

console.log(sum(10,6,9)(20)(30)())


//currying is technique in js where a function with multiple arguments is transformed into a sequence of functions each taking single arguments.
// simple version
function curry(a){
    return function insideCurry(b){
        if(b === undefined){
            return a
        }
        return curry(a+b)
    }
}
console.log(curry(10)(10)())

// having multiple arguments
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

console.log(sum(10,6,9)(20)(30,40)())
console.log(sum(10,6,9)()(30)()) //doesn't match the base condition it will try to 25(30) and 25 is not a function


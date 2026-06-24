// Polyfill is a js code that is used in the code so that older versions of browsers support modern js

// Map Polyfill
 
Array.prototype.myMap = function (cb) {
    console.log(this, "this")
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i , this))
    }
    return temp
    
}

let arr  = [2,3,1,3,3,2];
let result = arr.myMap((itm, ind) => 
    itm * 2
)

Array.prototype.myForEach = function (cb) {
    for(let i = 0; i < this.length; i ++){
        cb(this[i], i, this)
    }
    
}

 arr.myForEach((itm, ind) => console.log(itm + 2))
//while calling arr.myMap js
// console.log(forEachs)

// ✨ Promise.all takes an array of Promises and returns a array . It resolves if all Promises gets resolved and rejected as soon as one of the Promise got rejected.


const p1 = Promise.resolve("1");
const p2  = Promise.resolve(2);
const p3 = Promise.resolve(3);

function myPromiseAll(promiseArray){
    let output = []
    let resolvedPromisesCount = 0
        return new Promise((resolve, reject) => {
            for(let i = 0; i < promiseArray.length; i++){
                promiseArray[i].then(data =>{
                    output[i] = data; // preserve order as promise.all() preserves the order
                    resolvedPromisesCount++
                        if(resolvedPromisesCount == promiseArray.length){
                            resolve(output)
                        }

                }).catch(err => {
                    reject(err)
                })
            }

        })
}
const output = myPromiseAll([p1,p2,p3]);
output.then(data => {
    console.log(data)

}).catch(err=> {
    console.log("rejected with" + err)
}) 

//Promise.allSettled() is a promise method that takes an array of promises and returns array of promises.
//Promise.allSettled() will wait for all promises to settle (be it resolved and rejected) and returns an array of objects containing each promise's status and result.;


function myPromiseAllSettled(promiseArray){
    let status = []
    let completedPromiseCount  = 0
    return new Promise((resolve, reject) => {
            for(let i = 0; i < promiseArray.length; i++){
                promiseArray[i].then((data) => {
                    status[i] = {
                        status:"resolved",
                        data
                    } 
                    //preserves the order as well


                }).catch((reason) => {
                    status[i] = {
                        status:"rejected",
                        reason
                    }
                    //preserves the order as well


                }).finally(() => {
                    completedPromiseCount++;
                    if(completedPromiseCount === promiseArray.length){
                        resolve(status)
                    }
                    

                })
            }

    })
}


// 🚀Promise.race() takes array of promises and returns the value (not array) of first settled promise be it resolved or rejected
function myPromiseRace(promiseArray) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promiseArray.length; i++){
            promiseArray[i].then((data) => {
                resolve(data)

            }).catch((err) => {
                reject(err)

            })
        }
    })
    
}
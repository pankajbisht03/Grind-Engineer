// ### **Microsoft | Technical Round: The Microtask Priority Riddle**

// **Question:** Predict the exact output. Explain why the `asyncFn` behaves differently than a standard promise chain.

console.log('1 - Sync');

setTimeout(() => {
  console.log('2 - Macrotask');
}, 0);

async function asyncFn() {
  console.log('3 - Inside Async');
  await Promise.resolve();
  console.log('4 - After Await');
}

asyncFn();

Promise.resolve().then(() => {
  console.log('5 - Microtask');
});

console.log('6 - Sync End');

'1 - Sync'
'3 - Inside Async'
'6 - Sync End'
'4 - After Await'
'5 - Microtask'
'2 - Macrotask'


// Steps: 
// 1. Synchronous code will be run first '1 - Sync'
// 2. setTimeout is registered and goes into macrotask queue
// 3. asyncFn() executes 3 - Inside Async runs immediately
// 4. await pauses the function execution and 4 - After Await will goes into Microtask queue
// 5. Promise .resolve() at line 19 also adds to Microtask queue
// 6. 6 - Sync End will be consoled
// 7. 4 - After Await will consoled as it was in microtask queue before 5 - Microtask
// 8. 5 - Microtask will be consoled as it is the last task in microtask
// 9. At last 2 - Macrotask will be consoled as it is macrotask queue


// 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥


// ## Call, Apply, and Bind

// ### **Meta (Facebook) | Technical Trivia: Context in Arrow Functions**

// **Question:** What will be the output? Can the context of `greet` be changed using `.call()`? Why or why not?
var userName = "name"
const profile = {
    userName: 'Vasanth',
    greet: () => {
      console.log(`Hi, I'm ${this.userName}`);
    },
    welcome: function() {
      console.log(`Welcome, ${this.userName}`);
    }
  };
  
  const friend = { userName: 'Candidate' };
  
  profile.greet.call(friend); 
  profile.welcome.call(friend);
  // Hi, I'm undefined as Arrow functions permanently capture this from their surrounding scope, so their context cannot be changed.
  // Welcome Candidate as welcome is a normal function and this will refer to friend obj

  

//   ### **Swiggy | Machine Coding: Recursive Array Flattening**
// **Question:** Implement a polyfill for `Array.prototype.flat()`. Your implementation must handle the `depth` argument correctly.
  function nestedFlat(arr, depth){
      let res = []
      if(arr.length == 0){
          return
      }
        arr.forEach((arr) => {
            if(Array.isArray(arr) && depth > 0){
                res.push(...nestedFlat(arr, depth-1))

            }else{
                res.push(arr)
            }
        })
        return res
  }

  console.log(nestedFlat([1,3,3,3,[3,2,1,[3,2]]], 2))
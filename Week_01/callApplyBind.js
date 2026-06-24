// Call Apply and Bind are the methods available on js functions used to explicitly set the value of this
let name = "Shyam";
let nameAgain = "Name Again"
const user = {
    name: "Ram",
    nameAgain: "Hero Laal",
    greet: function name(params) {
        console.log(this.name)

    },
greetAgain: () => {
    console.log(this.nameAgain)
}
}

const greetFuncRef = user.greet;
greetFuncRef() //undefined as the reference to the object is lost.When a method is detached from its object and invoked as a standalone function, it loses its original this context unless you explicitly bind it.
greetFuncRef.call(user) //Ram as call is used to explicitly bind of the value of this by passing the user object as reference
user.greet() //Ram
user.greetAgain()  // undefined as arrow functions do not have their own this , they inherit it from their lexical scope

function showUserDetails(paramOne, paramTwo, paramThree) {
    console.log("Hello " + this.name + " from " + paramOne + paramTwo)
    
}

const userObj = {
    name: "Trump"
}
const userObjSecond = {
    name: "Modi"
}
showUserDetails.call(null, "USA", " White House")
//call invokes the function immediately and passes arguments one by one comma separated

showUserDetails.apply(userObj, ["White House " , "USA"])
//apply invokes the function immediately and passes arguments as an array comma separated

const boundFunctionRef = showUserDetails.bind(userObjSecond, "India", "Bharat");
boundFunctionRef()
boundFunctionRef.call(userObj, "Malaysia") // bind function ref is not overridden by call and apply, it permanently fixes the this


function test(a,b){
     console.log(a,b)
}
test.call(null, [1,2]) 
//[1,2] undefined, as a is treated as [1,2] and b is not passed as arguments so it is undefined
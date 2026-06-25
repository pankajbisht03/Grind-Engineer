// Shallow copy copies the top level elements only
// Shallow copy modifies the original obj
// Primitives are stored in stack memory with the actual values but Object types are stored in heap with the reference to their value in memory
const obj = {
    user: "Rahul",
    hobbies: ["Music", "Football", "Travelling"]
}

const shallowCopy = Object.assign(obj);
const anotherWay = {...obj}
shallowCopy.user = "Nidhi";
shallowCopy.hobbies.push("Coding")

console.log(obj, shallowCopy,anotherWay, "shallow")
console.log(obj.hobbies === shallowCopy.hobbies)

//Deep Copy
//It creates a new object and copies the nested level of objects not just top level elements

const normalObject = {
    name: "Rippling",
    city: {
        name: "Banglore"
    }
}

let deeplyCopiedObj = structuredClone(normalObject);
deeplyCopiedObj.city.name = "Mumbai"
//normal object doesn't get affected as we are deeply cloning normalObject so for object types the reference to memory will be different
console.log(normalObject, deeplyCopiedObj, "hereee")


// Write a custom deep copy function

function deepCopy (obj){
    //handling null and primitive values;
    if( obj === null || typeof obj !== "object"){
        return obj
    }
    //handling arrays

    if(Array.isArray(obj)){
        return obj.map((itm) => deepCopy(itm))
    }

    //handle objects
    const copy = {};
    for (const key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy

}

const copied = deepCopy(normalObject);
copied.city.name = "Gurgaon";

console.log(copied, normalObject, "deeepCopy")
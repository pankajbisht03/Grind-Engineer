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

//Deep Copy
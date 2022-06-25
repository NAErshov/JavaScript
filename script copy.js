const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA
copyOfA.Hello = "abc"

console.log(objectA)
console.log(copyOfA)


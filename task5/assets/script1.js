
 let color = {
    red : "#FF0000",
    green : "#00FF00",
    white : "#FFFFFF",
 }
let newArr = []
newArr = Object.entries(color);
console.log("users",newArr);

console.log("=========================================================================")


var result = Object.assign({}, ...Object.entries(color).map(([a,b]) => ({ [b]: a })))
console.log(result)

const obj = Object.fromEntries(color);

console.log("oooooo"+obj);
//console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr"+r)
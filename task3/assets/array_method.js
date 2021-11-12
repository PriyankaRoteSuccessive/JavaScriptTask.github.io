const array = [100,200,300,400,500,600,700,800,900]
const y = ["d","b","a","c","f","e",]

// // 1 length
// console.log(`Length : => `+array.length);

// // 2 indexof
// console.log(`IndexOf : => `+array.indexOf(500));

// // 3 include()
//  console.log(`include t : => `+array.includes(500));

//  console.log(`Include f : => `+array.includes(150));

// // 4 sort()
// console.log(`array() : => `+ y);

// y.sort();
//  console.log(`sort() : => `+ y);

//  // 5 reverse
//  y.reverse();
//  console.log(`reverse() : => `+ y);

//  // 6 join()
//  console.log(`join() : => `+ y.join(" my alphabet "));

//  // 7 pop()
//  array.pop();
//  console.log(`pop() : => `+ array);

//   // 8 push()
//   array.push(150);
//   console.log(`push() : => `+ array);

// // 9 slice() it out element start with given index
// const z = array.slice(4);
// console.log(`slice : => `+ z );

// // 10 shift()
// array.shift();
// console.log(`shift() : => `+array);

// // 11 unshift()
// array.unshift(50);
// console.log(`unshift() : => `+array);

// //12 index number
// array[1] = 90;
// console.log(`index number() : => `+array);

// //13 delete
// delete array[1];
// console.log(`delete () : => `+array);

// //14 splice()
// array.splice(2,0,100,110);
// console.log(`splice () : => `+array);

// //15 concat() 
// const comman = y.concat(array);
// console.log(`concat () : => `+comman);

//16 map()
var x = array.map(x => x * 3);
console.log(`map () : => `+x);

//17 findindex() 
console.log(`array() : => `+array);
let f = array.findIndex(f => f > 400);
console.log(`findindexof () : => `+f);

//18 forEach()
x.forEach(e => console.log(`forEach () : => `+e));

//19 filter()
var filter = array.filter(checkfilter);
console.log( `filter() `+filter);

function checkfilter(array){
    return array>= 500;

}

 //20 every()
 var every = array.filter(checkevery);
console.log(`every() =>`+every);

function checkevery(array){
    return array>= 600;

}




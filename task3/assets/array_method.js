const array = [100,200,300,400,500,600,700,800,900]
const y = ["d","b","a","c","f","e"]

// 1 length
console.log(`Length : => `+array.length);

// 2 indexof
console.log(`IndexOf : => `+array.indexOf(500));

// 3 include()
 console.log(`include t : => `+array.includes(500));
 console.log(`Include f : => `+array.includes(150));

// 4 sort()
console.log(`array() : => `+ y);
y.sort();
 console.log(`sort() : => `+ y);

 // 5 reverse
 y.reverse();
 console.log(`reverse() : => `+ y);

 // 6 join()
 console.log(`join() : => `+ y.join(" my alphabet "));

 // 7 pop()
 array.pop();
 console.log(`pop() : => `+ array);

  // 8 push()
  array.push(150);
  console.log(`push() : => `+ array);

// 9 slice() it out element start with given index
const z = array.slice(4);
console.log(`slice : => `+ z );

// 10 shift()
array.shift();
console.log(`shift() : => `+array);

// 11 unshift()
array.unshift(50);
console.log(`unshift() : => `+array);

//12 index number
array[1] = 90;
console.log(`index number() : => `+array);

//13 delete
delete array[1];
console.log(`delete () : => `+array);

//14 splice()
array.splice(2,0,100,110);
console.log(`splice () : => `+array);

//15 concat() 
const comman = y.concat(array);
console.log(`concat () : => `+comman);

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

//21 fill()
array.fill('abcd',7,9);
console.log(`fill() =>`+array);

//22 find()
const ages = [6, 12, 18, 25];
var s = ages.find(checkAge);
console.log(`find() =>`+s);
function checkAge(age){
    return age>= 18;
}
//23 some
var num = [11, 22, 33, 44];
console.log(`some() =>`+num);
var t = num.some(checknum);
console.log(t);
function checknum(age){
    return age>= 18;
}
//24 valueOf()
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.valueOf();
console.log(`valueOff()`+fruit);

//25 toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log(`toString()`+text);

//26 reduce()
const numbers = [175, 50, 25];
console.log(`reduce()`+numbers.reduce(myFunc));
function myFunc(total, num) {
  return total - num;
}

//reduceRight()
console.log(`reduceRight()`+numbers.reduceRight(myFunc));
function myFunc(total, num) {
  return total - num;
}

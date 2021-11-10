// variable
//var
var a = 15;
var b = 26;
var c = a + b;
console.log(a);
console.log(b);
console.log("Addtion is "+c);
console.log(typeof(c));



var d = 1, e = 'two', f; 
console.log(d);
console.log(e);
console.log(f);


var i = 1;  // numeric value

j = 'one'; // string value

k = 1.1; // decimal value

l = true; // Boolean value

m = null; // null value

console.log(i);

console.log(j);
console.log(k);
console.log(l);
console.log(m);

var n = "Hello " // global variable

function myfunction(){
    var p = "JavaScript!"; 
    // global and local variable
    console.log(n + p);
    
}
myfunction();

//let
let q = 10;
console.log(q);
 q = 'abcd';
 console.log(q);
 console.log(typeof(q));

//constant
const PI = 3.14;
console.log(PI);
console.log(typeof(PI));

//primitive data types 
//string
var str = "Hello Team";
console.log(str);
//Number
var num = 4395;
console.log(num);
console.log(typeof(num));
//boolean
var YES = true;

var NO = false;
 console.log(YES);
 console.log(NO);
 console.log(typeof (Yes));

 //null
  var r = null;
  console.log(r);
  console.log(typeof(r));

  // NON primitive data types

  //array
  var s =[ 12, 'pri',04,'asd'];
  console.log(s);
  console.log(typeof(s));

  //object
  var t = { 
      name:"mona",
      age:24
  }
  console.log(t.name);
  console.log(t.age);
  console.log(t);
  console.log(typeof(t));
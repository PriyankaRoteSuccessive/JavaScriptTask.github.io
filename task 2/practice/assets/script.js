// Symbol

var a = Symbol("hello");  
var b = Symbol("hello");
// console.log(a == b);  
console.log(`with variable ${a == b}`);

let c = 'abc';  
let d = 'abc';  
// console.log(c == d); 
console.log(`with let ${c == d}`); //templet string

//biginit

let e=117823928394820384239n;
console.log(`Bigint ${e}`);
console.log(typeof(e));

//Operators

//Arithmetic Operators

let f = 10;
let g = 5;
let h = f + g;
console.log(`Addition ${h}`);

let i = f - g;
console.log(`Substraction ${i}`);

let j = f * g;
console.log(`Multipication ${j}`);

let k = f ** g;
console.log(`Exponentiation ${k}`);

let l = f / g;
console.log(`Division ${l}`);

let m = f % g;
console.log(`Modulus (Division Remainder) ${m}`);

 f ++ ;
 console.log(`Increment ${f}`);

 g--;
console.log(`Decrement ${g}`);

//Assignment Operators
let n = 15 ;
console.log(`= operater ${n}`);

n += 5;
console.log(`+= operater ${n}`);

n -= 5;
console.log(`-= operater ${n}`);

n *= 5;
console.log(`*= operater ${n}`);

n /= 5;
console.log(`/= operater ${n}`);

n %= 5;
console.log(`%= operater ${n}`);

//Comparison Operators
o = 2;
console.log(`== operater ${o == 2}`);
console.log(`== operater ${o == 15}`);
console.log(`==" " operater ${o == "25"}`);
console.log(`=== operater ${o === 2}`);
console.log(`===" " operater ${o === "2"}`);
console.log(`!= operater ${o != 5}`);
console.log(`!= operater ${o != 2}`);
console.log(`!== " " operater ${o !== "2"}`);
console.log(`!== operater ${o !== 8}`);
console.log(`> operater ${o > 8}`);
console.log(`< operater ${o < 8 }`);
console.log(`>= operater ${o >= 8}`);
console.log(`<= operater ${o <= 8}`);





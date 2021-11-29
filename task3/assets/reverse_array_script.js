 const a = [ 1, 2, 3, 4];
 console.log(`Array : => `+ a );

const b = [];
for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
}
console.log(`Revese Array : => `+ b);

console.log(`=================================== `);

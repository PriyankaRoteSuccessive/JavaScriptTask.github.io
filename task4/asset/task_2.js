const users = [{ name: "Raj", age: 25 },
    { name: "Amol", age: 21 },
    { name: "Sham", age: 25 },
    { name: "kiran", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Shiv", age: 22 },
    { name: "Bhumi", age: 22 },
    { name: "Nayan", age: 21 }];

var finallist = {};
for(var j = 0; j < users.length; j++) {
if(finallist[users[j].age]) {
finallist[users[j].age].push(users[j].name);
} else {
finallist[users[j].age] = [users[j].name];
}
}
console.log ((finallist));



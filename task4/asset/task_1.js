const arr = ['Hi','Good','morning',['everyone','my','self',['Riya','I','learning',['java','-','script']]]]
const recursion = (arr,result=[])=>{
for(let i=0; i<arr.length; i++){
const value= arr[i];
if(Array.isArray(arr[i])){
recursion(value,result)
}else{
result.push(value)
}
}
return result;
}

console.log(recursion(arr))
console.log(`Flatten Without Recursion Method : => `+ recursion(arr));
console.log(`<================================================================================>`) 
 
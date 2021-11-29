let array =[452,6,8,45,8]

const maxNum =array.reduce((a, b) => {
      return Math.max(a, b)
});

const minNum =array.reduce((c,d)=>{
      return Math.min(c,d)
});
console.log(`max number :=`+maxNum);
console.log(`min number := `+minNum);



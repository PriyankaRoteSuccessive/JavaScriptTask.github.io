const bill_Amt = [50,90,100,200,300] ;


const tip_Amt = [];
const total_bill = [];

const gst = (bill_Amt) => {
for(let i = 0; i < bill_Amt.length; i++){ 
if (bill_Amt[i] < 100){
tip_Amt.push(bill_Amt[i] * (15/100));
total_bill.push(bill_Amt[i] + (bill_Amt[i] * 0.15));
}else{
tip_Amt.push(bill_Amt[i] * (20/100));
total_bill.push(bill_Amt[i] + (bill_Amt[i] * 0.2));
}
}
}
gst(bill_Amt);
console.log(`BILL AMOUNT : => `+ bill_Amt);
console.log(`Tip : => `+ tip_Amt);
console.log(`TOTAl AMOUNT : => `+ total_bill);

console.log(`=================================== `);


// const billVal = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 50, 110];
// const tip = [];
// const total = [];
// const calTip = (billVal) => {
// for(let i = 0; i < billVal.length; i++){
// if(billVal[i] >= 50 && billVal[i] <= 300){
// tip.push(billVal[i] * 0.15);
// total.push(billVal[i] + (billVal[i] * 0.15))
// }else{
// tip.push(billVal[i] * 0.20);
// total.push(billVal[i] + (billVal[i] * 0.2))
// }
// }
// }
// calTip(billVal);
// console.log('bill val', billVal)
// console.log('calc tip', tip);
// console.log('final bill', total);
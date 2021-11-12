const bill_Amt = [50,90,100,200,300] ;
console.log(`BILL AMOUNT : => `+ bill_Amt);

var tip_Amt = [];
var total_bill = [];

for(var i = 0; i < bill_Amt.length; i++){
    
if (bill_Amt[i] < 100){
    //console.log(`AMOUNT is Less then 100 : => `+ bill_Amt[i]);

    tip_Amt = (bill_Amt[i] * (15/100));
   // console.log(`TIP AMOUNT : => `+ tip_Amt);

    total_bill = tip_Amt + bill_Amt[i];
    console.log(`Total AMOUNT : => `+ total_bill);
}
else{
    //console.log(`AMOUNT is 100 or greater then 100 : => `+ bill_Amt[i]);

    tip_Amt = (bill_Amt[i] * (20/100));
    //console.log(`TIP AMOUNT : => `+ tip_Amt);
    
     total_bill = tip_Amt + bill_Amt[i];
    console.log(`Total AMOUNT : => `+ total_bill);
}
}
console.log(`TOTAl AMOUNT : => `+ total_bill);

console.log(`=================================== `);
function bMI_cal(w,h){
    var bMI =  (w / ((h * h) / 10000));
    console.log("weight : = " + w);
 console.log(" Height : = " + h);
    return bMI;
}
 let bMI = bMI_cal(80,177);
 
 console.log("BMI Is := " + bMI);
 
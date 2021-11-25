for(i=0;i<=10;i++){
    for(j=0;j<=20;j++){
    if(j<=10-i || j>=10+i ){
        document.write("&nbsp;&nbsp;");
    }
    else{
    document.write("*");
    }
}
    document.write("<br/>");
}

document.write("<br/>");

for(i=0;i<=10;i++){
for(j=0;j<=20;j++){
    if((j==0 && i<=5) || (i==5) || (j==10) || (j==20 && i<=5) ){
        document.write("*");
}
else{
    document.write("&nbsp;&nbsp;");
 }
}
document.write("<br/>");
}

document.write("<br/>");

//------------P-----------------
for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
      if((j==0)||(i==0)||(i==5)||(j==10 && i<=5)){
        document.write("*");
      }else{
        document.write("&nbsp;&nbsp");
      }
    }
    document.write("<br/>")
  }

  document.write("<br/>")

//------------A--------------
    for(i=0;i<=10;i++){
        for(j=0;j<=10;j++){
          if((j==0)||(i==0)||(i==5)||(j==10)){
            document.write("*");
          }else{
            document.write("&nbsp;&nbsp");
          }
        }
        document.write("<br/>")
      }

      document.write("<br/>")

    //----------------B-------------
    for(i=0;i<=10;i++){
         for(j=0;j<=10;j++){
              if((j==0)||(i==0)||(i==5)||(j==10)||(i==10)){
                document.write("*");
              }else{
                document.write("&nbsp;&nbsp");
              }
            }
            document.write("<br/>")
          }

          document.write("<br/>")

//----------------C-------------

    for(i=0;i<=10;i++){
        for(j=0;j<=10;j++){
             if((j==0)||(i==0)||(i==10)){
               document.write("*");
             }else{
               document.write("&nbsp;&nbsp");
             }
           }
           document.write("<br/>")
         }
         document.write("<br/>")

//----------------D-------------

for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
         if((j==0)||(i==0)||(i==10)||(j==10)){
           document.write("*");
         }else{
           document.write("&nbsp;&nbsp");
         }
       }
       document.write("<br/>")
     }
     document.write("<br/>")

     //----------------E-------------

for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
         if((j==0)||(i==0)||(i==10) ||(i==5)){
           document.write("*");
         }else{
           document.write("&nbsp;&nbsp");
         }
       }
       document.write("<br/>")
     }

     document.write("<br/>")

      //----------------F-------------

for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
         if((j==0)||(i==0)||(i==5)){
           document.write("*");
         }else{
           document.write("&nbsp;&nbsp");
         }
       }
       document.write("<br/>")
     }

     document.write("<br/>")

     //----------------G-------------

    for(i=0;i<=10;i++){
        for(j=0;j<=10;j++){
             if((j==0)||(i==0)||(i==10)||(j==1)){
               document.write("*");
             }else{
               document.write("&nbsp;&nbsp");
             }
           }
           document.write("<br/>")
         }
         document.write("<br/>")
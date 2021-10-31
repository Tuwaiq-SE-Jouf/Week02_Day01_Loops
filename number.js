//for loop
for(let i=1;i<=10;i++){
    console.log(i);
    if(i<=10){
        console.log("hallo"+" "+i)
    }
}
for(let i=10;i>=1;i--){
    console.log("hi"+i);
}
for(let i=4;i>=-16;i--){
    console.log(i);
}
for(let i=8;i<=41;i+=5){
    console.log(i);
    console.log("fifty");
}
//fizzbuzz
for(let i=1;i<=100;i++){
       if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
       }
           else if(i%3==0){
              console.log("fizz");
             }
              else if (i%5==0){
                  console.log("buzz");
              }
}

//odd/even

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i+"even");
    }
    else if(i%2==1) {
        console.log(i+"odd");
    }
}
//table
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        console.log(j*i);
        console.log("hallo");
    }
    //console.log("i="+i);
    console.log("End");
    //console.log(i*5);
}
//
for (let i = 1; i <=20; i++)
 {
    
         i=i*i;
         console.log(i);

}
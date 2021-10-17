/* For loop */
for (let i=0;i<=10;i++){
    console.log(i);
}
for (let i=11;i>=0;i--){
    console.log(i);
}
for (let i=4;i>=-16;i--){
    console.log(i);
}
for (let i=8;i<=41;i+=5){
    console.log(i);
}


/* FIZZBUZZ */
for (let i=1;i<=100;i++){
    if (i % 3 == 0 && i % 5 ==0){
    console.log("FIZZBUZZ");
} else if (i & 3 == 0){
    console.log("FIZZ");
} else if (i & 5 == 0){
    console.log("BUZZ");
} else console.log(i);
} 


/* THE EVEN/ODD NUMBER */

for (let i=0;i<=20;i++){
    if (i == 0){
        console.log(i +"is even"); 
    } else if (i % 2 == 0){
        console.log(i +"is even"); 
    } else {
        console.log(i +"is odd"); 
    }
}


/* MULTIPLICATION TABLE */

let i,j,total;
for(i=1; i<=5; i++){
    
    console.log(" "+i" ");
    for(j=1; j<=5; j++){
        total=i*j;
        console.log(i + j " " + total);

    }
}


/* FIBONACCI SEQUENCE */
let num1=20;
let i=0, j=1,num ;
for(let number=1; number<num1; number++){
    console.log(i);
    num=i+j;
    i=j;
    j=num;
}


/*  WHILE LOOP */
let i=1;
let num=prompt("enter a number");
while (i <= num)
{
    if (num % 2 == 0, i++)
        console.log("even");
    else {
        console.log("odd"); 
    }
}



/*  FACTORIAL */
let number = prompt('Enter a num');
if (number <= 0) {
    console.log(' number does not exist');
}
else if (number == 1) {
    console.log(`The factorial of ${number} is 1.`);
}   else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
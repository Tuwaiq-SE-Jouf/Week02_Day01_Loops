

/*for loop*/

console.log("Print every number from 0 to 10");
for(let i=0; i<=10;i++){
    console.log(i);
}
console.log("Print every number from 10 to 0");
for(let i=10; i>=0;i--){
    console.log(i);
}
console.log("Print every number from 4 to -16");
for(let i=4; i>=-16;i--){
    console.log(i);
}

console.log("Print every fifth number from 8 to 41");
for(let i=8; i<=41;i+=5){
    console.log(i);
}

/* The classic Fizzbuzz Program*/
console.log("The classic Fizzbuzz Program");
for(let i=0; i<=100;i++){

    if(i%5==0 && i%3==0){
        console.log(i+ " Fizzbuzz");
    }
    else if(i%5==0){
        console.log(i+ " Buzz");
    }
    else if(i%3==0){
        console.log(i+ " Fuzz");
    }
}


/* even odd number */

console.log("The even/odd reporter");
for(let i=0; i<=20;i++){
    if(i%2==0){
    console.log(i +" is even number ");}
    else {console.log(i +" is odd number ");}
}

/*Nested for loop: Multiplication table*/
console.log("Nested for loop: Multiplication table");
for(let i=1; i<=5;i++){
    for(let j=1; j<=10;j++){
        
        console.log(i +"*"+ j +"=" +i*j);
    } 
}

/*Fibonacci sequence*/
console.log("Fibonacci sequence");
let fib =20;
let number0=0;
let number1=1;
let count =0;

for(let i=1;  i<=fib;i++){
    if(fib<=0){console.log(number0);
        }
        else if (fib==1){console.log(fib)
        console.log(number0);}
else {console.log("Fibonacci")}
while (count<fib){
    console.log(number0)

let nextNum = number0+number1;
number0=number1;
number1=nextNum;
count++;
}}


/*While Loop*/
console.log("While Loop");
let number = prompt("enter your number ");
let b =1;
while (b<=number){
    if (b % 2 != 0){
      console.log(b);}
      b++;
  }

  /*Factorial*/
  console.log("Factorial");
  let number3 = prompt("enter your number factorila");
  factoril=1;
  let c= 1;
  while(c<=number3){
  
      factoril=factoril*c;
      c++;
  }console.log(factoril);
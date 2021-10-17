// Loops Lab
/*
for(let i=0; i<=10; i++){
    console.log(i)
}


for(let i=10; i>=0; i--){
    console.log(i)   
}

for(let i=4; i>=-16; i--){
    console.log(i)
}


for(let i= 8; i<=41; i=i+5){
    console.log(i)
}


// Fizzbuzz Program

for(let i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log( i+" Fizzbuzz");
    } else if (i % 3 == 0){
        console.log(i+" Fizz");
    }else if (i % 5 == 0){
    console.log(i+" Buzz");
    }
}


// ----   The even/odd reporter ----

for(let i = 0 ; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i+ "is even");
    }else {
        console.log(i+ "is odd");
    }
}


//  Nested for loop: Multiplication table

for(let i = 1; i <= 5; i++){
    console.log(" Multiplication table for number" +i );
    for (let j = 1; j <= 10; j++){
        console.log(i+ "*" + j + "=" + i * j);
    }
    console.log("  ")
}


//   --- Fibonacci sequence: ---

let M = 0;
let T = 1;
let num =0;
for (let i = 0; i <= 20 ; i++){
    num += T + "   ";
    let next = M + T ;
    M = T ;
    T = next; 
}
console.log(num);



//  ---  While Loop  --  odd number 

const number = prompt(" plz enter a number");
let i = 1;
while (i <= number){
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
}



// --- Factorial

const num = prompt("enter a number ")
let num1 = 1;
i = 1;
while ( i <= num){
    num1 = num1 * i;
    i++;
}
console.log(num + "!=" + num1);

*/
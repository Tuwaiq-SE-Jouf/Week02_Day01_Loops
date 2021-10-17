//For Loop 1.1

/*
for(let number = 0;number<=10; number++){

    console.log(number);

}
*/

//For Loop 1.2

/*for (let num = 10 ; num >=0; num--){
    console.log(num);
}

*/

// Foor Loop 1.3

/*for (let num = 4 ; num >=-16; num--){
    console.log(num);
}
*/

//For Loop 1.4

/*
for(let num = 8 ; num<=41 ; num+=5){
    console.log(num);
}

*/



//The classic Fizzbuzz Program

/*
for(let num = 1; num <=100 ; num++){
    if(num%3==0 && num%5==0 ){
        console.log(num+" Fizzbuzz");
    }

    else if(num%3==0){
        console.log(num+" Fizz");
    }
    else if(num%5==0 ){
        console.log(num+" Buzz")
    }

}


*/


//The even/odd reporter
/*
let num=20;

for (let i=0 ; i<=num ; i++){

    if (i%2==0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}

*/

//Nested for loop: Multiplication table
/*(let one = 1; one<=5; one ++){

    console.log("-----------"+one+"-----------");


    for(let two = 1; two <=10 ; two ++){

        console.log(one+" X "+two+" = "+one*two);

    }
    
}
*/


// Fibonacci sequence:

/*
let number = 20;
let num1 = 0, num2 = 1, temp;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(num1);
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
}
*/


//Odd numbers By while loop
/*

let i =1;
let number = prompt("Enter The Number:");
while(i<+number){

    if(i%2!==0){
        console.log(i);
    }
    i++;

}

*/



//Factorial 

/*
let num = prompt("Enter The Number");

if(num <=0 ){
    console.log("Not Allowd");  
}

else if (num==1)
{
    console.log("The factorial of "+num+" is 1" )

} else{
    let factorial = 1;
    for(let i =1 ; i<=num ; i++){

        factorial *=i;

    }

    console.log("The factorial of "+num+" is "+factorial)
}

*/
console.log(" Loop Lab ");
console.log("*************************");
console.log(" ** Task 1 **");
//Print every number from 0 to 10
console.log(" Print Number From 0 to 10 ");

for (let i = 0; i <= 10 ;i++) {
  console.log(i);
 
}
//Print every number from 10 to 0
console.log(" Print Number From 10 to 0 ");

for (let j = 10 ; j >= 0; j-- ) 
{
  console.log(j);
 
}
//Print every number from 4 to -16

console.log(" Print Number From 4 to -16 ");

for (let r = -16;r <= 4;  r++)
 {
  console.log(r);
 
}
//Print every fifth number from 8 to 41

console.log(" Print Number From 8 to 41 ");
for ( let n = 8 ; n <= 41 ; n = n + 5) {
  console.log(n);

}

console.log(" ** Task 2 **");
console.log(" Fizzbuzz Program ");

/*
- For every number between 1 and 100...
- If the number is evenly divisible by 3, print "Fizz"
- If the number is evenly divisible by 5, print "Buzz"
- If the number is evenly divisible by 3 AND evenly divisible by 5, print "Fizzbuzz"*/

console.log(" Print Number From 0 to 10 ");
let f = 1;
while (f <= 100) 
{
  if (f % 3 != 0 && f % 5 != 0) {
    console.log( f + "The Number is Fizzbuzz");
  } else if (f % 3 != 0) {
    console.log(f + "The Number is Fizz");
  } else if (f % 5 != 0) {
    console.log(f + "The Number is Buzz");
  }

  f++;
}

//The even/odd reporter
//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
console.log(" ** Task 3 **");
console.log(" even/odd Reporter  ");
let o = 1;
while (o <= 20) 
{
    if (o % 2 != 0) 
    {
        console.log(o + " is Odd Number");
    
    }
    else 
    {
        console.log(o + " is Even Number");

    }

    o++;
}

console.log(" ** Task 4 **");
console.log(" Multiplication  ");
//Write a nested loop that print the multiplication table for number from 1-5
for (let s = 1; s <= 5; s++)
 {
    for (let m = 1; m <= 10; m++)
     {
        console.log(m + "*" + s + "=" + m * s)
     }
}

console.log(" ** Task 5 **");
console.log(" Fibonacci Program ");

    let num1 = 0
    let num2 = 1
    let nextNum

    for (let h = 0; h <= 20; h++) 
    {

    console.log(num1)

    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
 
    }


console.log(" ** Task 6 **");
// Find ODD Number from number that user given
console.log("The Odd Number from 1 to your Number will be ");
let num = prompt(" Enter the Number to find the odd number : ")
let p = 1;
while (p <= num) 
{
    if (p % 2 != 0) 
    {
        console.log(p);
    
    }

    p++;
}


console.log(" ** Task 7 **");
console.log(" Factorial Program ");

let userNum = prompt(" Enter the Number to find the Factorial fot it  ")

        let fact = 1;
        for (u = 1; u <= userNum; u++) 
        {
           
            fact = fact * u;
        }
        console.log("The factorial of "+ userNum +" is "+ fact);
    

    





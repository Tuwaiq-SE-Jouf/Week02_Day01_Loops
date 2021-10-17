
//Print every number from 0 to 10

let i =1;
while(i<=10){
  i++;
  console.log(i);
}

//Print every number from 10 to 0

let x =10;
while(x>=0){
  x--;
  console.log(x);
}
//Print every number from 4 to -16
let a =4;
while(a>=-16){
  a--;
  console.log(a);
}
//Print every fifth number from 8 to 41

let q=8;
while(q <= 41){
q=q+5;

console.log(q);
}

/*The classic Fizzbuzz Program
For every number between 1 and 100...
If the number is evenly divisible by 3, print "Fizz"
If the number is evenly divisible by 5, print "Buzz"
If the number is evenly divisible by 3 AND evenly divisible by 5, print "Fizzbuzz"*/



for  (var l=1 ; l< 100; i++)
{
 if 
((l % 3)==0 && (l % 5)==0 )
{
console.log(l+"FizzBizz");

  if( (l % 3) ==0) 
{
  console.log(l+"Fizz");
}
else if 
  ((l % 5)==0) 

{
  console.log(l+"Bizz");

}

}
}

//The even/odd reporter
for  (var m=1 ; m<=20; i++)
{
  if (m ==0){
  console.log(m+ "is even");
}
else if (m % 2==0) {
  console.log(m+ "is even");

}
else {
  console.log(m+ "is odd");
}}
//Nested for loop: Multiplication table*/

for  (let f=1 ; f<=5; f++)
for  (let g=1 ; g<=10; g++) {
  total = f * g;

  console.log(total) ;
}
/*Fibonacci sequence:
Write a program that prints the first 20 elements of Fibonacci sequence:
Fibonacci sequence is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers, and the first two wlements are 0 and 1
it starts like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, .*/
number =prompt ("Enter a number");
let n1=0;
let n2=1;
let nextTerm ;
console.log("Fibonacci sequence");
console.log(n1);
console.log(n2);
nextTerm = n1+n2 ;
while(nextTerm<=number){
  console.log(nextTerm);
  n1=n2;
  n2=nextTerm;
  nextTerm=n1+n2;
}
/*Odd numbers
Write a program that takes a number as an input, then use a while loop to print an odd numbers from 1 to the given number.*/

console.log("Enter a number");

for  (var m=1 ; m<=20; i++)
{
  if (m ==0){
  console.log(m+ "is even");
  }
}
/*Factorial
Write a program that takes a number as input, then prints the Factorial of that number.*/
n =prompt("Enter a number");
 if (number1 <0){
  console.log("Error! ");

 }
 else if (number1===0){
  console.log("the Factorial of"+n+"is 1.");

 }
 else {
   let fact=1 ;
   for (z=1;z<=number1; z++){
     fact *=z;
   }
   console.log("the Factorial of"+n+"is "+fact);
 }
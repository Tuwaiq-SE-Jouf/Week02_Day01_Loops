//hw (1)
let  i =1;

let nomber = prompt("ENTER NUMBER");

while

(i<= nomber){

    if (i%2!=0){

        console.log(i);
    }
    
    i++;
}
//hw (2)
for( var i=1; i<100; i++ )
 {

    if( (i%3) == 0 && (i%5) == 0 )
     {
        console.log( i+" FizzBuzz" );

    }else if( (i%3) == 0 ) 
    {
        console.log( i+" Fizz" );

    }
    else if( (i%5) == 0 ) {

        console.log( i+" Buzz" );
    }
    
}

//hw(3)
for (var x=0; x<=20; x++)
 {
    if (x == 0)
     {
            console.log(x +  " is even");
    }
    else if (x % 2 == 0)
     {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

//hw (4)
const number = parselnt (prompt('Enter an integer:'));
for (let i = 1;  i <=5 ;  i++)
for (let l = 1;  l <=10 ;  l++)

{
    total = i*l;

    console.log ('total '+total);
}
//Hw(5)
console.log(" Fibonacci Program ");

    let d = 0
    let f = 1
    let sd

    for (let h = 0; h <= 20; h++) 
    {

    console.log(d)

    sd = d + f;
    f = d;
    d = sd;

    }
//hw(6)

console.log("The Odd Number from 1 to your Number will be ");
let num = prompt(" Enter the Number to find the odd number : ")
let s = 1;
while (s <= num) 
{
    if (s % 2 != 0) 
    {
        console.log(s);

    }

    s++;
}


// hw(7)
console.log(" Factorial Program ");

let userNum = prompt(" Enter the Number to find the Factorial fot it  ")

        let fact = 1;
        for (ul = 1; ul <= userNum; ul++) 
        {

            fact = fact * ul;
        }
        console.log("The factorial of "+ userNum +" is "+ fact);


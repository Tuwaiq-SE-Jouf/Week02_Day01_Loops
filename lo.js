 
 //The even/odd reporter
 function chec(){
 let i=1;
let nub = prompt('Enter number');

while(i <= nub){
    if(i%2!=0)
    console.log(i);
    i++;
}
}
chec() ;



//For loop
function loops(){
let i =0;
while(i<=10){
    console.log(i);
    i++;
}
}
loops();

//
let i =10;
function loop(){
while(i>=0){
    console.log(i);
    i--;
}
}
loop();
//

function add(){
let i = 4;
while(i >= -16){
    console.log(i);
    i--;  
}
}
add();
//

let i =8;
function ask(){
while(i <=41){
    console.log(i);
    i +=5;
}
}
ask();
 //The classic Fizzbuzz Program

let i=1;
function fizzbuzz(){
while(i<=100){
    if(i %3 ==0 && i %5 ==0){
        console.log(i + "fizzbuzz");
    }
        if(i %3 ==0){
            console.log(i + 'fizz')
        }
        if(i %5 ==0){
            console.log(i + 'buzz')
    }
    i++;
}
}
fizzbuzz();

//Nested for loop

function Nested(){

for (let i=1 ; i<=5; i++){
    for(let j=1; j<=10;j++){
        console.log(i+ '*' + j + '=' + i * j );
    }
}
}
Nested();

//Fibonacci sequence


let i1 = 0
let i2 = 1
let nextn=i2 ;
function  sequence(){
    for (let m = 0; m <= 20; m++) 
    {
    console.log(nextn);

 i1 =i2;
 i2=nextn;
 nextn=i1+i2;

    }
   
  
  }

sequence();

//Odd numbers
function odd(){
let n = prompt("Enter the Number");
let nu = 1;

while(nu <= n){
if(nu %2 !== 0)
console.log(nu);
  nu++;
}
}
odd();


//Factorial


let Num = prompt(" Enter the Numbert ")

        let fact = 1;
        function Factorial(){
        for (i= 1; i <= Num; i++) 
        {

            fact = fact * i;
        }
        console.log("The result of "+ Num +" is "+ fact);
    }
    Factorial();
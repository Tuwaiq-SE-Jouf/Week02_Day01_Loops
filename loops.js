
    console.log("1==========");

let i = -1;

while (i < 10) {
    i++;

    console.log(i);
}

console.log("2==========");




let i = 11;

while (i > 0) {
    i--;

    console.log(i);
}



console.log("3============");

let i = 5;

while (i >= -15) {
    i--;

    console.log(i);
}

console.log("4=========");



let i = 8;

while (i < 41 ) {



    i += 5;

    console.log(i);
}


console.log(" Fizzbuzz Program=====");




let i;
for ( i = 1;i<=100;i++){

if(i % 3 == 0 && i % 5 == 0)

console.log(" fizzbuzz");
else if (i % 3 ==0)

console.log(" fizz");

else if (i % 5==0)

console.log(" buzz");

}



console.log("even/odd reporter ==========");



let i = 1 ;

while (i <= 20) {
    i++;


    if ( i % 2 == 0 ) {

        console.log("even");

    }
    else
    console.log("odd");


}



console.log("Nested for loop =======");



for (let i = 1; i <= 5; i++) {
    for (let x = i; x <= 10; x ++ ) {



        console.log(i + " x "+x+" = "+i*x);

    }

}


console.log("Fibonacci sequence=======")




let first = 0;
let second = 1;
let next;
for (let i = 1; i <= 20; i++) {

    next = (first + second);
    first = second;
    second = next;
    console.log(first)

}


console.log("Odd numbers========");



let i = 1;
let num;
num = prompt("Enter a number: ");

while (i <= 28) {
    i++;


    if (num % 2 == 0) {

        console.log("even");

    }
    else
        console.log("odd");
}




console.log("Factorial ========")


let i;
let f = 1;
let num;

num = prompt("Enter a number: ");
while (num <= 0);
for (i = 1; i <= num; i++){
    f = f * i;

console.log("the factorial of " +num+ " is " +f);
}






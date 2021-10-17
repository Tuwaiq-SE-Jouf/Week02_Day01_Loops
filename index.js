console.log("1- Print every number from 0 to 10 ");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("--------------");

console.log("Print every number from 10 to 0");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("-------------");
console.log("Print every number from 4 to -16");

for (let i = 4; i >= -16; i--) {
  console.log(i);
}

console.log("-----------");
console.log("Print every fifth number from 8 to 41");
for (let i = 8; i <= 41; i = i + 5) {
  console.log(i);
}

console.log("------------");
console.log("The classic Fizzbuzz Program");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " Fizzbuzz ");
  } else if (i % 3 == 0) {
    console.log(i+ " Fizz ");
  } else if (i % 5 == 0) {
    console.log(i+ " Buzz ");
  }
}


console.log("--------------");
console.log("The even/odd reporter");
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}

console.log("---------------");
console.log("Multiplication table");

for (let i = 1; i <= 5; i++) {
  console.log("Multiplication table for " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
  console.log("");
}

console.log("------------------");
console.log(
  "Write a program that prints the first 20 elements of Fibonacci sequence:"
);

let f1 = 0;
let f2 = 1;

let text = "0 ";
for (let i = 0; i <= 20; i++) {
  text += f2 + " ";

  let next = f1 + f2;
  f1 = f2;
  f2 = next;
}

console.log(text);


console.log("----------------");
console.log(
  "Write a program that takes a number as an input, then use a while loop to print an odd numbers from 1 to the given number."
);

const number = prompt("Enter a number: ");

let i = 1;
while (i <= number) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}

console.log("-----------------");
console.log(
  "Write a program that takes a number as input, then prints the Factorial of that number"
);

const num = prompt("Enter a number to calculate factorial");
let fact = 1;
i = 1;

while (i <= num) {
  fact = fact * i;
  i++;
}

console.log(num + "!=" + fact);

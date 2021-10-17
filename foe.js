
//for loop
for (var i = 1; i <= 10; i++) { console.log(i) }
console.log("........................")
for (var r = 10; r > 0; r--) { console.log(r) }
console.log("........................")
for (var o = 4; o > -16; o--) { console.log(o) }
console.log("........................")
for (var h = 8; h <= 41; h += 5) { console.log(h) }

//The classic Fizzbuzz Program
console.log("...........Fizzbuzz Program.............")
for (var p = 1; p <= 100; p++) {
    if (p % 3 == 0 && p % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (p % 3 == 0) {
        console.log("fizz");
    }
    else if (p % 5 == 0) {
        console.log("Buzz");

    }

}
//even odd
console.log("......even/odd reporter............")
for (var u = 1; u <= 100; u++) {
    if (u % 2 == 0) {
        console.log(u + "even");
    }
    else if (u % 2 != 0) {
        console.log(u + "odd");
    }
}
// Multiplication table
console.log("....... Multiplication table...........")

for (let q = 1; q <= 5; q++) {
    for (let z = 1; z <= 10; z++) {
        console.log(q + "*" + z + "=" + q * z)
    }
}
//Fibonacci sequence:
console.log(".......Fibonacci sequence: ...........")
let we=0;
let hy=1;
let gf;
for(let he=1;he<=20;he++){
    console.log(we)
    gf=we+hy;
    we=hy;
    hy=gf;
}
    //---------------add w
    console.log(".......add wile ...........")

    let po=1;
let unmber = prompt("Enter the number please");

while(po<=unmber){
    if(po%2!=0)
    console.log(po);
    po++;
}
//-----Factorial
console.log("--- factoria--");

let oo = prompt("  Factorial   ")

        let fact = 1;
        for (ul = 1; ul <= oo; ul++) 
        {

            fact = fact * ul;
        }
        console.log(" factorial "+ oo+" ***"+ fact);

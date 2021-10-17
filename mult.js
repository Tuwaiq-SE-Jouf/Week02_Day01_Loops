
const number = parseInt(prompt('Enter an integer: '));


for(let i = 1; i <= 10; i++) {

    
    const result = i * number;

    
    console.log(`${number} * ${i} = ${result}`);
}
//homork 5
console.log("fibonacci program")
let h =0
let  n =1
let sd
for (let n =0; n<=20; n++)
{
    console.log(h)
    sd =h +n;
    n =h;
    h= sd;
}
// homork 5 odd 
console.log(" the odd number from 1 your number will be");
let num = prompt ("enter the number to find the odd number :")
let p = 1;
while (p<= num)
{
    if (p % 2 !=0)
    {
        console.log(p);
    }
    p++;
}
// hw5 
console.log("factorial program");
let usernum = prompt (" enter the number to find the factorial fot it")
let fact =1;
for (u =1; u<=usernum; u++)

{
    fact = fact *u;
}


console.log("the factorial of " +usernum+ "is"+fact);












    }
}






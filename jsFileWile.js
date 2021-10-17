 let i = 1;
number = prompt("enter a num");
while (i<=number){
   
   if ( i % 2 != 0){

    console.log(i);
   } 
   i++;
} 



// loop

 let i;
for (i = 0; i <= 10; i++ ) {
    console.log(i);
}

 let i;
for (i = 10; i >= 0 ; i-- ) {
    console.log(i);
}


let i;
for (i = 4; i >= -16 ; i-- ) {
    console.log(i);

}


 let i;
for (i = 8; i <= 41; i = i+5 ) {
    console.log(i);
 
}
 
// The classic Fizzbuzz Program

  let i;
for (i = 0; i <= 100; i++ ) {
    
  if( i % 3 ==0 && i % 5==0) {
     
        console.log (i+' fizzbuzz');

   } else if (i % 3==0) {
        console.log(i+' fizz')
   }
    
        else if ( i % 5==0){

        
        
        console.log( i+ ' buzz')
        }
    

    
}

// The even/odd reporter

 let i;
    
for ( i = 0; i <= 20; i++) {
    if ( i % 2==0){
        console.log ( i+ 'even number');
    
    } else {
        console.log(i+ 'odd number' )
    
    }

}

// 'Multiplication table'
 
 let i; 
for ( i = 1; i<= 5;i++){
    console.log( 'Multiplication table for ' +i);

    let d;
    for ( d = 1; d<= 10; d++) {
        console.log(i + '*' + d + '=' + i *d);
    }

}

// Fibonacci sequence:

  let s1 = 0;

let s2 =1;

let word = '0';

let i;

for ( i = 0; i <= 20; i++){
       word += s2 + '';

    let after = s1 +s2;
    s1 =s2 
    s2 = after;

}
console.log (word);


 // odd numbers

const numb = prompt ( 'enter a number ');
 
let a= 1;

   while ( a <= numb){
         
       if ( a % 2 != 0){
           console.log( a);
       }
        
       a++

   }

    // Factorial
      
      const number = prompt( 'enter a number to calculate factorial');

      let factor =1;
        
       
      a = 1;
       
     while ( a <= number)

      {

        factor = factor * a ;
              a++;

     }

      console.log( number+ '!=' + factor);


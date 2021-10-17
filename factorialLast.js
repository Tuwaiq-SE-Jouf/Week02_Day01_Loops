
const Number =parseInt( prompt('pleace enter number'));
if(Number<0){
    console.log('ERROR');
}
else if(Number===0){
    console.log('fact :'+ Number);
}
else{
    let fact=1;
    for(i=1;i<=Number;i++){
        fact *=i;
    }
    console.log('the fact :' + Number + 'IS'+ fact);
}



//let i =Number;
//for(i=Number;i<=Number;i--){
 //   console.log( Number + "!"+ Number * i);
//}
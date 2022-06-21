/*
//deprecated
function modularExponentiation(x,y,p){
  return Math.pow(x,y) % p;
}

console.log(modularExponentiation(2,2,1));
*/

function modularExponentiation(x,y,p){
  if(p == 1) return 0;

  var value = 1;
  for(var i = 0; i < y; i++){
    value = value * x % p;
  }

  return value;
}

console.log(modularExponentiation(2,10,10));
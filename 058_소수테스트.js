function isPrime(n){
  if(n <= 1) return false;
  if(n <= 3) return true;

  if(n%2 == 0 || n%3 == 0) return false;

  for(var i=5; i*i <= n; i=i+6){
    if(n % i == 0 || (n+2) % i == 0) return false;
  }

  return true;
}

//console.log(isPrime(11));

function allPrimesLessThanN(n){
  for(var i = 1; i < n; i++){
    if(isPrime(i)) console.log(i);
  }
}

allPrimesLessThanN(100);
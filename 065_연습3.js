function maxDivide(number, divisor){
  while(number % divisor == 0){
    number /= divisor;
  }
  return number;
};

function isUgly(number){
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

function arrayNUglyNumbers(n){
  var cnt = 0, currentNumber = 1, uglyNumbers = [];

  while(cnt < n){

    if(isUgly(currentNumber)){
      uglyNumbers.push(currentNumber);
      cnt++;
    }
    currentNumber++;
  }

  return uglyNumbers;

}

console.log(arrayNUglyNumbers(10));
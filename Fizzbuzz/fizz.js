var numeros = 100;

for(var i = 1; i <= numeros; i++){
  var divisible = false;
  if(esDivisible(i, 3)){
    s=document.write("Fizz");
    divisible = true;
  }
  if(esDivisible(i, 5)){
    document.write("Buzz");
    divisible = true;
  }
  if(!esDivisible(i, 3) && !esDivisible(i, 5)){
    document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor){
  if(num % divisor == 0){
    return true;
  }
  else{
    return false;
  }
}

function haveSameLastDigit(a, b) {
  return Math.abs(a % 10) ==Math.abs(b % 10);
}

console.log(haveSameLastDigit(27, 137)); 
console.log(haveSameLastDigit(42, 19));
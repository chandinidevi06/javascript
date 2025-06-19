const number = 5;

const result = (function(n) {
    return (function f(x) {
        if (x == 0 || x == 1) return 1;
        return x * f(x - 1);
    })(n);
})(number);

console.log("Factorial:", result);  

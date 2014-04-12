// Returns nth number in fibonnaci sequence. 
// Function uses memoization to cache the values in the sequence.
    // see JavaScript: The Good Parts
var fibonacci = (function() {
    var sequence = [0,1];
    
    var fib = function(n) {
    
        var result = sequence[n];
        
        if (typeof result != 'number') {
            result = fibonacci(n-1) + fibonacci(n-2);
            sequence[n] = result;
            console.log(n, result);
        }
        
        return result;
    };

    return fib;
})();


console.log('-------------------- Fibonacci Sequence --------------------');

// To better understand memoization, check the console and see which results are cached
// Then, try moving fib(10) before fib(5) and see what happens!
console.log("fibonacci(5): ", fibonacci(5));
console.log("fibonacci(10): ", fibonacci(10));
console.log("fibonacci(15): ", fibonacci(15));
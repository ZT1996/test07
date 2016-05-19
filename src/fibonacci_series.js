'use strict';

function fibonacci_series(n) {
    var fibonacciArray = [];

    for(var i = 0; i <= n; i++){
        fibonacciArray.push(fibonacci(i));
    }
    return fibonacciArray;
}

function fibonacci(i) {
    if(i <= 1){
        return i;
    }
    else{
        return fibonacci(i-1) + fibonacci(i-2);
    }
}


module.exports = fibonacci_series;

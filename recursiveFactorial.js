function recursiveFactorial(n){
    if(n===0 || n===1){
        return 1
    }else{
        return n * recursiveFactorial(n-1);
    }   
}

console.log(recursiveFactorial(5))
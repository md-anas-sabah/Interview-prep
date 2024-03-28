// Simple function

function add(a,b,c){
    return a+b+c;
}

const result = add(1,2,3);
console.log(result) // 6


// Currying Function

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const res = addition(1)(2)(3)
console.log(res) // 6
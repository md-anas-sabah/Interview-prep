// Sum of digits at even places of a number.

// i/p : [1,2,3,4,5,6];
// o/p:  9

function sumEven(arr){
    let sum = 0;
    if(arr.length === 0){
       return console.log("Array is empty")
    }

    for(let i=0;i<arr.length;i++){
        if(i%2 !== 0){
            sum += i
        }
    }

    return sum;
}

const arr = [1,2,3,4,5,6];
const arr1 = []

console.log(sumEven(arr))
console.log(sumEven(arr1))
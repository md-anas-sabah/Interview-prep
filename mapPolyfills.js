Array.prototype.myMap = function(callback,args){
    let result = [];
    for(let i=0;i<this.length;i++){
        result.push(callback.call(args,this[i],i,this))
    }
    return result;
}

const array = [1,2,3,5,6]

const square = array.myMap(function(element){
    return element*element;
})

console.log(square)
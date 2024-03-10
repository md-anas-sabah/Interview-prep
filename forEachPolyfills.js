Array.prototype.myForEach = function(callback,args){
    for(let i =0;i<this.length;i++){
        callback.call(args,this[i],i,this);
    }
}

const array = [1,23,43,53];

array.myForEach(function(element,index){
    console.log(`${index}: ${element}`);
})
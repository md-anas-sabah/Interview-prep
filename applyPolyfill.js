Function.prototype.myApply = function(context,argsArray){
    context = context || this;
    const uniqueID = `__${Date.now()}__`;
    context[uniqueID] = this;
    const result = context[uniqueID](...argsArray);
    delete context[uniqueID];
    return result;
}

const fruit = ['apple','banana','papaya'];
for(let i=0;i<fruit.length;i++){
    logArrayItem.myApply(null,[fruit[i],i])
}
function logArrayItem(item,index){
    console.log(`Index ${index}: ${item}`)
}



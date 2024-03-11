Function.prototype.myCall = function(context,...args){
    context = context || this;
    const uniqueID  = `__${Date.now()}__`;
    context[uniqueID] = this;
    const result = context[uniqueID](...args);
    delete context[uniqueID];
    return result;
}

function logArrayItem(item,index){
    console.log(`Index ${index}:${item}`)
}

const fruit = ['apple','banana','grapes'];

for(let i=0;i<fruit.length;i++){
    logArrayItem.myCall(null,fruit[i],i);
}
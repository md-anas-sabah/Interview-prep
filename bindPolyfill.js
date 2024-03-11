Function.prototype.myBind = function(context,...args){
    const originalFunc = this;
    return function(...innerArgs){
        const combinedArgs = args.concat(innerArgs);
        return originalFunc.apply(context,combinedArgs);
    }
}

function logArrayItem(item,index){
    console.log(`Index ${index}: ${item}`)
}

const fruit = ['apple','orange','grapes'];

const boundLogArrayItem = logArrayItem.myBind(null);
fruit.forEach(boundLogArrayItem)
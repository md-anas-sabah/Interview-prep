// Throttling

function throttle(func,delay){
    let flag = true;
    return function(){
        const context = this;
        const args = arguments;
        if(flag){
            func.apply(context,args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },delay)
        }
    }
}

const expensive = () => {
    console.log("Expensive");
  };
  
const betterExperience = throttle(expensive, 5000);
  
window.addEventListener("resize", betterExperience);
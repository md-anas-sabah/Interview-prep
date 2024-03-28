// Debouncing

let counter = 0;

function debounce(func, delay) {
  let timeoutID;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}


function getData() {
  console.log("Fetching Data..", counter++);
}

const betterFunction = debounce(getData, 300);
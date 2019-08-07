const printSomething = (delayInSeconds) => {
    console.log("Hello after " + delayInSeconds + " seconds");
};

setTimeout(printSomething(4), 4*1000);
setTimeout(printSomething(8), 8*1000);
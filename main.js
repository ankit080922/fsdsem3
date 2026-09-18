// synchronous
console.log(" Sync Start")
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("End");

// asynchronous
console.log("Async Start")
setTimeout(() => {
    console.log("setTimeout");
}, 2000)
console.log("Async End")
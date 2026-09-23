import EventEmitter from"node:events";
const emitter = new EventEmitter()

//event registration

emitter.on("signup",()=>{
console.log("you signup")
})
emitter.on("signup",()=>{
console.log("add to the DATABASE")
})

//for notification

emitter.on("signup",()=>{
    console.log("notification of signup");
})
emitter.on("signup",()=>{
    console.log("Email send");
})

emitter.emit("signup")
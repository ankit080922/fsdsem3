import EvenrtEmitter from "node:events";
const emitter = new EvenrtEmitter();
emitter.on("orderPlaced" , (ordername, price) => {
    console.log(`Order ${ordername} and price: ${price} Placed successfully`);
}) 

emitter.on("orderPlaced", ()=>{
    console.log("Notification sent to user");
})

emitter.on("orderPlaced", ()=>{
    console.log("Email send");
})
emitter.on("orderPlaced", ()=>{
    console.log("Inventory updated");
})
 emitter.emit("orderPlaced" , "iphone 18", 158000);

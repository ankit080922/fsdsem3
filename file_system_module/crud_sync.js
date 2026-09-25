//CRUD
//Sync
//Async
// -->Callback based method
// -->Promises based method
import fs from 'fs';
fs.writeFileSync("notes.txt", "Hello");
console.log("File created successfully!");
const data = fs.readFileSync("notes.txt", "utf8");
console.log("Data:", data);
fs.appendFileSync("notes.txt", "\nHello World");
console.log("Data appended successfully!");
const updatedData = fs.readFileSync("notes.txt", "utf8");
console.log("Updated Data:");
console.log(updatedData);
fs.rmSync("notes.txt");
console.log("File deleted successfully!");
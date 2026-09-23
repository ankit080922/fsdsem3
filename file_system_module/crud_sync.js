// fs => CRUD => Sync,  Async => callback based methods, promises based methods 

import fs from 'fs'

fs.writeFileSync("notes.txt", "Hello")

fs.appendFileSync("notes.txt", " Hello World")

const data = fs.readFileSync("notes.txt", "utf-8")
console.log("Data:" , data)

fs.rmSync("notes.txt")

import fs from "fs/promises"
async function greet()
    {
        return "hello";
    }
fs.writeFile("log.txt","user sign up")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
fs.readFile("log.txt","utf-8")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
fs.appendFile("log.txt", "\nnew user joined")
  .then(() => {
    console.log("Data appended successfully");
  })
  .catch((err) => {
    console.log("Error appending file:", err);
  });

  async function fileHandling(filename, content) {
  await fs.writeFile(filename, content);
  console.log('File created');

  const data = await fs.readFile(filename, { encoding: 'utf-8' });
  console.log(data);
}

fileHandling('user.txt', 'username:Ankit')
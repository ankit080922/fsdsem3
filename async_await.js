function getuser()
{
    const userData = new Promise((resolve,reject) => {
    let user = true;
    if(!user)
    {
        reject( new Error(" user not exists"));
        
    }
    else{
        resolve(
            {
                username: " akshat", role: " data analyst"
            }
        )
    }
})
}
async function fetchuser()
{
    const response = await getuser();
    console.log(response);
}
fetchuser();
console.log("hello");
function callback()
{
    console.log("Hello World");
}
setTimeout(callback, 2000);



function greet(username,callback) 
{
    console.log("Welcome ");   
    if(typeof callback === "function"){
        
    callback(username)
    }
}



greet("Ankit", (username) => {
    console.log("Hello, " , username);
});


function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts Fetched");
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(posts);
    }, 1000);
}
getPosts("Ankit", (posts) => {
    console.log("Posts: ", posts);
});

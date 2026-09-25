import fs from 'fs';

fs.mkdir("./myFolder", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Folder created successfully!");
});

fs.readDir("./myFolder", (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Files in folder:", files);
});
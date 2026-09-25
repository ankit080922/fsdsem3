import fs from 'fs';

fs.stat("./myfolder", (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Folder stats:", stats);
    
});
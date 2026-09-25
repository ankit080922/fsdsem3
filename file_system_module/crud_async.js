import fs from 'fs';

fs.writeFile("config.txt", "ELCE-A", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File created successfully!");
});

fs.readFile("config.txt", {"encoding": "utf8"}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Data:", data);
}
);

fs.appendFile("config.txt", "ELCE-A", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File updated");
});

fs.rm("config.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File deleted successfully!");
});

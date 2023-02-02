const fs = require("fs");
const rs = fs.createReadStream("file.txt");
let size = 0;
rs.on("data", (data) => {
size += data.length;
console.log("File size:", size);
});
const fs = require("fs");

var buf = Buffer.alloc(256);
len = buf.write("hello jay");

fs.writeFileSync("./buffer.txt", buf);

fs.readFileSync("./buffer.txt", "utf-8");
const res = buf.toString();
console.log("Data read:", res);

const fs = require("fs")
const zlib = require("zlib")

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./stream/file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
})



readableStream.pipe(gzip).pipe(fs.WriteStream("./stream/file2.txt.gz"))


const writeableStream = fs.createWriteStream("./stream/file2.txt");

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })


readableStream.pipe(writeableStream);
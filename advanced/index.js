// const fs = require('fs')

// console.log("first");

// fs.readFile("./advanced/file.txt", "utf-8", (err, data) => {
//     console.log("File Contents")
// })

// console.log("last")






// const crypto = require('crypto')

// const start = Date.now()
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now()-start)







// const crypto = require('crypto')

// const MAX_CALLS = 5;

// const start = Date.now()

// for(let i=0; i<MAX_CALLS; i++){

//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now()-start);
//     })
// }









// const crypto = require('crypto')

// process.env.UV_THREADPOOL_SIZE = 16;
// const MAX_CALLS = 16;

// const start = Date.now()

// for(let i=0; i<MAX_CALLS; i++){

//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now()-start);
//     })
// }









const https = require("https")

const MAX_CALLS = 12;

const start = Date.now();

for(let i=0; i<MAX_CALLS; i++){

    https.request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Request: ${i+1}`, Date.now()-start);
        });
    })
    .end();
} 
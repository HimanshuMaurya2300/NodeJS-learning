// const http = require('http')

// const server = http.createServer((req, res) => {

//     if(req.url === "/"){

//         res.writeHead(200, {"Content-Type" : "text/plain"});

//         res.end("Home page")
//     }
//     else if(req.url === "/slow-page"){

//         let j = 0;

//         for(let i=0; i<6000000000; i++){
//             j++;
//         }

//         res.writeHead(200, {"Content-Type" : "text/plain"})

//         res.end(`Slow Page ${j}`)
//     }
// });



// server.listen(8000, () => console.log("server is running on port 8000"))













const http = require('http')
const {Worker} = require("worker_threads")

const server = http.createServer((req, res) => {

    if(req.url === "/"){

        res.writeHead(200, {"Content-Type" : "text/plain"});

        res.end("Home page")
    }
    else if(req.url === "/slow-page"){

        const worker = new Worker("./worker-thread.js")

        worker.on("message", (j) => {

            res.writeHead(200, {"Content-Type" : "text/plain"})

            res.end(`Slow Page ${j}`)
        })
    }
});



server.listen(8000, () => console.log("server is running on port 8000"))
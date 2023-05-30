// console.log("console.log 1")
// process.nextTick(() => console.log("this is process.next 1"))
// console.log("console.log 2")





// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))

// process.nextTick(() => console.log("this is process.nextTick 1"))





// process.nextTick(() => console.log("this is process.nextTick 1"));

// process.nextTick(() => {
//     console.log("this is process.nextTick 2");

//     process.nextTick(() => {
//         console.log("this is the inner nextTick inside nextTick")
//     });
// });

// process.nextTick(() => console.log("this is process.nextTick 3"));


// Promise.resolve().then(() => console.log("this is promise.resolve 1"));

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve 2");

//     Promise.resolve().then(() => {
//         console.log("this is the inner nextTick inside promise then block")
//     });
// });

// Promise.resolve().then(() => console.log("this is promise.resolve 3"));





// setTimeout(() => console.log("this is setTimeOut 1"), 0)
// setTimeout(() => console.log("this is setTimeOut 2"), 0)
// setTimeout(() => console.log("this is setTimeOut 3"), 0)

// process.nextTick(() => console.log("this is process.nextTick 1"));

// process.nextTick(() => {
//     console.log("this is process.nextTick 2");

//     process.nextTick(() => {
//         console.log("this is the inner nextTick inside nextTick")
//     });
// });

// process.nextTick(() => console.log("this is process.nextTick 3"));


// Promise.resolve().then(() => console.log("this is promise.resolve 1"));

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve 2");

//     Promise.resolve().then(() => {
//         console.log("this is the inner nextTick inside promise then block")
//     });
// });

// Promise.resolve().then(() => console.log("this is promise.resolve 3"));





// setTimeout(() => console.log("this is setTimeOut 1"), 0)

// setTimeout(() => {
//     console.log("this is setTimeOut 2")

//     process.nextTick(() => console.log("this is inner nextTick inside setTimeout"));
// }, 0)

// setTimeout(() => console.log("this is setTimeOut 3"), 0)


// process.nextTick(() => console.log("this is process.nextTick 1"));

// process.nextTick(() => {
//     console.log("this is process.nextTick 2");

//     process.nextTick(() => {
//         console.log("this is the inner nextTick inside nextTick")
//     });
// });

// process.nextTick(() => console.log("this is process.nextTick 3"));


// Promise.resolve().then(() => console.log("this is promise.resolve 1"));

// Promise.resolve().then(() => {
//     console.log("this is promise.resolve 2");

//     process.nextTick(() => {
//         console.log("this is the inner nextTick inside promise then block")
//     });
// });

// Promise.resolve().then(() => console.log("this is promise.resolve 3"));





// setTimeout(() => console.log("this is setTimeout 1"), 1000)
// setTimeout(() => console.log("this is setTimeout 2"), 500)
// setTimeout(() => console.log("this is setTimeout 3"), 0)





// const fs = require('fs')

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))





// const fs = require('fs')

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })





// const fs = require('fs')

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// // for(let i=0; i<200000000; i++){}





// const fs = require('fs')

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// setImmediate(() => console.log("this is setImmediate 1"))


// // for(let i=0; i<200000000; i++){}





// const fs = require('fs')

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")

//     setImmediate(() => console.log("this is inner setImmediate inside readFile"))

//     process.nextTick(() => console.log("this is inner process.nextTick inside readFile"))

//     Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"))

// })

// process.nextTick(() => console.log("this is process.nextTick 1"))

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// // for(let i=0; i<200000000; i++){}





// setImmediate(() => console.log("this is setImmediate 1"));

// setImmediate(() => {
//     console.log("this is setImmediate 2");

//     process.nextTick(() => console.log("this is process.nextTick 1"))

//     Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// })

// setImmediate(() => console.log("this is setImmediate 3"))





// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setTimeout 2"));





const fs = require('fs')

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback")
});

setImmediate(() => console.log("this is setImmediate 1"));

setTimeout(() => console.log("this is setTimeout 1"), 0)

Promise.resolve().then(() => console.log("this is promise.resolve 1"));

process.nextTick(() => console.log("this is process.nextTick 1"));

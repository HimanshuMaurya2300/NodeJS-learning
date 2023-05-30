// const fs = require("node:fs")

// console.log("first")

// const data = fs.readFileSync("./fsModule/data.txt", "utf-8")

// console.log(data)

// console.log("second")


// fs.readFile("./fsModule/data.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })


// console.log("third")


// fs.writeFileSync("./fsModule/greet.txt", "hii, buddy!!")


// fs.writeFile("./fsModule/greet.txt", "Hello Jii", (err) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File written")
//     }
// })









const fs = require('fs/promises')


async function readFile(){

    try{
        const data = await fs.readFile("./fsModule/greet.txt", "utf-8")
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}


readFile()




console.log("first")

fs.readFile("./fsModule/data.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

console.log("second")
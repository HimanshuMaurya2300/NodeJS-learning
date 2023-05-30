// const localModule = require('./path-module')
// const fs = require("node:fs")


const upperCase = require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to coding !!`));
}

// greet("Himanshu")

module.exports = greet;
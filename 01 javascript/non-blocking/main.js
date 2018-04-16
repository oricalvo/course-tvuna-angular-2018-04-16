const fs = require("fs");
const {promisify} = require("util");

const readFile = promisify(fs.readFile);
const copyFile = promisify(fs.copyFile);

async function main() {
    console.log("before");

    await doSomething();

    console.log("after");
}

async function doSomething() {
    const content = await readFile("main.js");
    console.log("readFile completed");
    await copyFile("main.js", "main.js.backup");
    console.log("copyFile completed");
}

// readFile("main.js").then(function() {
// });

// console.log("before");
//
// function doSomething() {
//
//     fs.readFile("main.js", function (err, data) {
//         console.log(data.toString());
//     });
//
// }
//
// fs.copyFile("main.js", "main.js.backup", function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     console.log("File was copied");
// });
//
//
// console.log("after");



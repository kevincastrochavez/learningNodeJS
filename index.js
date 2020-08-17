const fs = require("fs");
const http = require("http");

// Blocking synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}. Created at ${Date.now()}`;
// fs.writeFileSync("./txt/input.txt", textOut);
// console.log(textOut);

// Non-Blocking asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}, ${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });

// console.log("Text");

///////////////////
// SERVER

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started at port 8000");
});
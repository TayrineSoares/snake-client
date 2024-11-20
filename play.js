const connect = require('./client')

//setup stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  return stdin;   
};

// ensures that we can terminate the game using ctrl + c.
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

console.log("Connecting...");
connect();
setupInput();

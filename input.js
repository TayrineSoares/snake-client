
//setup stdin (standart input)
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); // handleUserInput function being invoked when the stdin object emits a 'data'
  return stdin;   
};

// handling user inputs 
const handleUserInput = function (key) {
  // ensures that we can terminate the game using ctrl + c.
  if (key === "\u0003") {
    process.exit();
  }
  // wasd movements 
  if (key === "w") {
    console.log("Move: up");
  }
  if (key === "a") {
    console.log("Move: left");
  }
  if (key === "s") {
    console.log("Move: down");
  }
  if (key === "d") {
    console.log("Move: right");
  }

};

module.exports = setupInput;

// handleUserInput is only called by setupInput which is already in this file. Since handleUserInput does not need to be called or referenced elsewhere, it does not need to be exported from the input module.
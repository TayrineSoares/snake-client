
//setup stdin (standart input)
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); // handleUserInput function being invoked when the stdin object emits a 'data'
  return stdin;   
};

// ensures that we can terminate the game using ctrl + c.
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = setupInput;

// handleUserInput is only called by setupInput which is already in this file. Since handleUserInput does not need to be called or referenced elsewhere, it does not need to be exported from the input module.
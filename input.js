// Stores the active TCP connection object.
let connection; // places a reference conn in another variable connection which is in a global scope 

//setup stdin (standart input)
const setupInput = (conn) => {
  connection = conn; // the object returned by connect()
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
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

};

module.exports = { 
  setupInput, 
  handleUserInput
};

// handleUserInput is only called by setupInput which is already in this file. Since handleUserInput does not need to be called or referenced elsewhere, it does not need to be exported from the input module.
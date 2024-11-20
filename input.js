const { MOVE_KEYS, CHAT_KEYS } = require("./constants");

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
  for (let keys in MOVE_KEYS) {
    if (key === keys) {
      connection.write(MOVE_KEYS[keys]);
    }
  }
  
  // sending messages to the server for everyone to see 
  for (let keys in CHAT_KEYS) {
    if (key === keys) {
      connection.write(CHAT_KEYS[keys]);
    }
  }

};

module.exports = { 
  setupInput, 
  handleUserInput
};

// handleUserInput is only called by setupInput which is already in this file. Since handleUserInput does not need to be called or referenced elsewhere, it does not need to be exported from the input module.
const { MOVE_KEYS, CHAT_KEYS } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  
  if (key in MOVE_KEYS) {
    connection.write(MOVE_KEYS[key]);
  }
  
  if (key in CHAT_KEYS) {
    connection.write(CHAT_KEYS[keys]);
  }
};

module.exports = {
  setupInput,
  handleUserInput
};
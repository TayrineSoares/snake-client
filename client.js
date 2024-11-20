const net = require("net"); 
const { IP, PORT } = require("./constants");

// establishes a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // providing a message when a successful connection is made. 
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  // the data event listener logs data received from the server. 
  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  // sending a Name to the server (.write)
  conn.on("connect", () => {
     conn.write("Name: TAY");
    
  });
 

  // interpret incoming data as text 
  conn.setEncoding("utf8");
  return conn;

};

//connect() returns an object that can be used to interact with the server


module.exports = { connect }; 
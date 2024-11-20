const net = require("net"); 

// establishes a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541
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
  // sending the string "Move: up" as data to the server via the conn object.
  conn.on("connect", () => {
    
    conn.write("Name: TAY"); 
    
    // setTimeout(() => {
    //   conn.write("Move: up");
    //  }, 1000);
    
  });
 

  // interpret incoming data as text 
  conn.setEncoding("utf8");
  return conn;

};



module.exports = connect; 
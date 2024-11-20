const net = require("net"); 

// establishes a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541
  });

  // Providing a message when a successful connection is made. 
  conn.on("connect", (data) => {
    console.log("You have been connected!");
  });

// interpret incoming data as text 
conn.setEncoding("utf8");
return conn;

};

console.log("Connecting...");
connect();

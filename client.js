const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    conn.write("Name: TAY");
  });
 
  conn.setEncoding("utf8");

  return conn;

};

module.exports = { connect };
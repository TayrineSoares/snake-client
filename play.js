const { connect } = require('./client')
const { setupInput } = require('./input')

console.log("Connecting...");
conn1 = connect();

setupInput(conn1); // this line could also be setupInput(conn()); 

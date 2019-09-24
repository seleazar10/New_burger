var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
//   port:     '9001',
  password : '232400',
  database : 'burgers_db'
});
 
connection.connect(function(err){
    if(err) throw err;
    console.log('mysql on '+ connection.threadId)
});

module.exports = connection;

  var server = require('net').createServer(function(connection){

    console.log("New subscriber has registered");

    connection.write("New subscriber has registered");

   connection.on('data', function(chunk){

    connection.write("This is what you have said "+chunk.toString());
   
   });

    connection.on('close', function(){

    	 console.log("Subscriber Closed");

    });

  });

  server.listen(5000, function(){
  	 console.log("Server is listening to the port 5000");
  });
    

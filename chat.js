var fileName = process.argv[2];
  
  if(!fileName){

     throw Error("File is not specified");
  }

  var fileProcess = require('fs');

  var server = require('net').createServer(function(connection){

    console.log("New subscriber has registered");

    connection.write("Now watching "+ fileName + " for any change");

   connection.on('data', function(chunk){

    connection.write("This is what you have said "+chunk.toString());
   
   });

    connection.on('close', function(){

    	 console.log("Subscriber Closed");

    });

  });

  server.listen(5435, function(){
  	 console.log("Server is listening to the port 5435");
  });
    

require('dotenv').config({ path: './vars.env' });

import app from './app';

const server = app.listen(process.env.PORT, function() {
	console.log('Listening to port: ', process.env.PORT);
});



const io = require('socket.io').listen(server);

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
	  console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
 });
	 

 io.emit('some event', { for: 'everyone' });
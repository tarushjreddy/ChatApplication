//this is the node server for socket io connections
// const PORT = process.env.PORT || 8000;
const io = require('socket.io')(8000);
// var http = require('http');
// var server = http.Server(app);

// var io = require('socket.io')(server);
const users = {

};
io.on('connection', socket => {
    socket.on('new- user-joined', name => {
        users[socket.id] = name;
        console.log("new user", name)
        socket.broadcast.emit('user-joined', name);
    })

    socket.on('send', message => {
        socket.broadcast.emit('recieve', {
            message: message, name: users[socket.id]
        });
    })
    socket.on('disconnect', name => {
        socket.broadcast.emit('leave', {
            name: users[socket.id],

        })
    })




})
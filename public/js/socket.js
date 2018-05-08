var socket = io();

socket.on('onlineUsers', function (count) {
    console.log("Online users: " + count);
});
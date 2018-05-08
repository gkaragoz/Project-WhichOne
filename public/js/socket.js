var socket = io();

socket.on('onlineUsers', function (count) {
    console.log("Online users: " + count);
    $("#online-count").html(count);
});

socket.on('updateVotes', function (question) {
    console.log("Updated question: " + JSON.stringify(question));
    handleQuestionResponse(question);
});
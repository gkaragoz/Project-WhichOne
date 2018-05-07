$(document).ready(function () {
    var currentQuestion;

    var leftText = $("#left-text");
    var rightText = $("#right-text");
    var questionText = $("#question");
    var leftImage = $("#left-image");
    var rightImage = $("#right-image");
    var leftVote = $("#left-vote");
    var rightVote = $("#right-vote");
    var leftPercent = $("#left-percent");
    var rightPercent = $("#right-percent");

    getAQuestion(function (question) {
        handleQuestionResponse(question);
    });

    $("#left-image").click(function () {
        alert("Sol fotoğrafa tıklandı");

        updateAQuestionVote(currentQuestion._id, currentQuestion.leftVotes, 'left');
    });

    $("#right-image").click(function () {
        alert("Sağ fotoğrafa tıklandı");

        updateAQuestionVote(currentQuestion._id, currentQuestion.rightVotes, 'right');
    });

    $("next-button").click(function () {
        alert("Sonraki butonuna tıklandı");

        getAQuestion(function (question) {
            handleQuestionResponse(question);
        });
    });

    function handleQuestionResponse(question) {
        console.log(question);
        currentQuestion = question;

        leftText.html(question.leftChoice.name);
        rightText.html(question.rightChoice.name);
        questionText.html(question.text);
        leftImage.attr("src", question.leftChoice.imageUrl);
        rightImage.attr("src", question.rightChoice.imageUrl);
        leftVote.html(question.leftVotes + " kez oylandı.");
        rightVote.html(question.rightVotes + " kez oylandı.");

        var totalVotes = question.leftVotes + question.rightVotes;
        var leftPercentage = (question.leftVotes * 100) / totalVotes;
        var rightPercentage = (question.rightVotes * 100) / totalVotes;

        leftPercent.html("%" + leftPercentage);
        rightPercent.html("%" + rightPercentage);
    }
});
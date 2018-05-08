var currentQuestion;

var leftText = $("#left-text");
var rightText = $("#right-text");
var questionText = $("#question");
var leftDiv = $("#left-div");
var rightDiv = $("#right-div");
var leftImage = $("#left-image");
var rightImage = $("#right-image");
var details = $(".details-row");
var leftVote = $("#left-vote");
var rightVote = $("#right-vote");
var leftPercent = $("#left-percent");
var rightPercent = $("#right-percent");
var nextButton = $("#next-button");
var isClickable = true;

$(document).ready(function () {

    getAQuestion(function (question) {
        handleQuestionResponse(question);
    });

    leftDiv.click(function () {
        hasClicked('#left-div', '#right-div', 'left');
    });

    rightDiv.click(function () {
        hasClicked('#right-div', '#left-div', 'right');
    });

    nextButton.click(function () {
        setDefaultProperties();
        getAQuestion(function (question) {
            isClickable = true;
            handleQuestionResponse(question);
        });
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

    leftPercent.html("%" + parseFloat(Math.round(leftPercentage * 100) / 100).toFixed(2));
    rightPercent.html("%" + parseFloat(Math.round(rightPercentage * 100) / 100).toFixed(2));
}

function setChoose(chooseContent, otherContent) {
    $(chooseContent).css('background-color', 'rgba(0, 255, 0, .7)');
    $(otherContent).css('background-color', 'rgba(255, 0, 0, .7)');
    $(".details-row").css('display', 'block');
}

function setDefaultProperties(){
    leftDiv.css('background-color', '')
    rightDiv.css('background-color', '')
    details.css('display', 'none');
}

function hasClicked(chooseSide, otherSide, way) {
    if (isClickable) {
        setChoose(chooseSide, otherSide);

        if (way === 'right') {
            updateAQuestionVote(currentQuestion._id, ++currentQuestion.rightVotes, way);
        }
        else if (way === 'left') {
            updateAQuestionVote(currentQuestion._id, ++currentQuestion.leftVotes, way);
        }
        isClickable = false;

        socket.emit('getVotes', currentQuestion); 
    }
}
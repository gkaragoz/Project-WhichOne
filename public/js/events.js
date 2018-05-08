$(document).ready(function () {
    var currentQuestion;

    var leftText = $("#left-text");
    var rightText = $("#right-text");
    var questionText = $("#question");
    var leftDiv = $("#left-div");
    var rightDiv = $("#right-div");
    var details = $(".details-row");
    var leftVote = $("#left-vote");
    var rightVote = $("#right-vote");
    var leftPercent = $("#left-percent");
    var rightPercent = $("#right-percent");
    var nextButton = $("#next-button");
    var clickControl = true;

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

        if (!clickControl) {
            alert("İleri butonuna tıklandı");
            /*getAQuestion(function (question) {
                handleQuestionResponse(question);
            });*/
            setDefaultProperties();
            clickControl = true;
        }
    });

    function handleQuestionResponse(question) {
        console.log(question);
        currentQuestion = question;

        leftText.html(question.leftChoice.name);
        rightText.html(question.rightChoice.name);
        questionText.html(question.text);
        leftDiv.attr("src", question.leftChoice.imageUrl);
        rightDiv.attr("src", question.rightChoice.imageUrl);
        leftVote.html(question.leftVotes + " kez oylandı.");
        rightVote.html(question.rightVotes + " kez oylandı.");

        var totalVotes = question.leftVotes + question.rightVotes;
        var leftPercentage = (question.leftVotes * 100) / totalVotes;
        var rightPercentage = (question.rightVotes * 100) / totalVotes;

        leftPercent.html("%" + leftPercentage);
        rightPercent.html("%" + rightPercentage);
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
        
        if (clickControl) {

            setChoose(chooseSide, otherSide);

            if (way === 'right') {
                
                updateAQuestionVote(currentQuestion._id, currentQuestion.rightVotes, way);
            }
            else if (way === 'left') {
                
                updateAQuestionVote(currentQuestion._id, currentQuestion.leftVotes, way);
            }
            clickControl = false;
        }
    }
});
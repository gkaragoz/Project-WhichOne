$(document).ready(function() {
    var leftText=$("#left-text");
    var rightText=$("#right-text");
    var questionText=$("#question");
    var leftImage=$("#left-image");
    var rightImage=$("#right-image");
    var leftVote=$("#left-vote");
    var rightVote=$("#right-vote");
    var leftPercent=$("#left-percent");
    var rightPercent=$("#right-percent");

    getAQuestion(function(question) {
        console.log(question);
        leftText.html(question.leftChoice.name);
        rightText.html(question.rightChoice.name);
        questionText.html(question.text);
        leftImage.attr("src", question.leftChoice.imageUrl);
        rightImage.attr("src", question.rightChoice.imageUrl);
        leftVote.html(question.leftChoice.votes + " kez oylandı.");
        rightVote.html(question.rightChoice.votes + " kez oylandı.");

        var totalVotes = question.leftChoice.votes + question.rightChoice.votes;
        var leftPercentage = (question.leftChoice.votes * 100) / totalVotes;
        var rightPercentage = (question.rightChoice.votes * 100) / totalVotes;

        leftPercent.html("%" + leftPercentage);
        rightPercent.html("%" + rightPercentage);
    });

    $("#left-image").click(function(){
        alert("Sol fotoğrafa tıklandı");
    });

    $("#right-image").click(function(){
        alert("Sağ fotoğrafa tıklandı");
    });

    $("next-button").click(function(){
        alert("Sonraki butonuna tıklandı");
    });
});
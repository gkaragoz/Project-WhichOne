$(document).ready(function() {
    var leftText=$("#left-text");
    var rightText=$("#right-text");
    var questionText=$("#question");
    var leftImage=$("left-image img");
    var rightImage=$("right-image img");

    getAQuestion(function(question) {
        console.log(question);
        leftText.html(question.leftChoice.name);
        rightText.html(question.rightChoice.name);
        questionText.html(question.text);
        leftImage.attr("src", question.leftChoice.imageUrl);
        rightImage.attr("src", question.rightChoice.imageUrl);
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
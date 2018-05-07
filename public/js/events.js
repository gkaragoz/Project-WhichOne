$(document).ready(function() {
    getAQuestion();
    
    alert("Sayfa yüklendi");

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
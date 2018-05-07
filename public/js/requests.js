function getAQuestion () {
    $.ajax({
        url:"/randomQuestion",
        type:"GET",
        dataType:"json",
        success: function (data) {
            console.log(data);
        //    $("#code").val(data.code);
        //    $("#name").val(data.name);
        //    $("#content").val(data.content);
        },
        error: function (err) {
            alert("Error: " + err.status + ":" + err.statusText);
            // $("#code").val("UNKNOWN");
            // $("#name").val("UNKNOWN");
            // $("#content").val("UNKNOWN");
        }
    });
}
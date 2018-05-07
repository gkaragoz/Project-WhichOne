function getAQuestion (callback) {
    $.ajax({
        url:"/randomQuestion",
        type:"GET",
        dataType:"json",
        success: function (data) {
            callback(data);
        },
        error: function (err) {
            return "ERROR";
        }
    });
}
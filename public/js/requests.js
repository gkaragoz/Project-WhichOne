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

function updateAQuestionVote(questionId, votes, side) {
    var data = {};

    if (side === 'left') {
        data.leftVotes = votes;
    } else if (side === 'right') {
        data.rightVotes = votes;
    }

    $.ajax({
        url:"/questions/" + questionId,
        type:"PUT",
        data: data,
        dataType:"json",
    })
}
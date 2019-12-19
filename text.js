const ParameterTextLive = {
    leftMargin: 400,
    topMargin: 20
};
const ParameterTextScore = {
    marginLeft: 10,
    marginTop: 20
};
let Text = function() {
    this.showLive = function(context, ball) {
        context.font = "20px Arial";
        context.fillStyle = "#DF0101";
        context.fillText("Live: " + ball.getlive(), ParameterTextLive.leftMargin, ParameterTextLive.topMargin);
    };
    this.showScore = function(context, brick) {
        context.font = "20px Arial";
        context.fillStyle = "#FF0000";
        context.fillText("Score: " + brick.getScore(), ParameterTextScore.marginLeft, ParameterTextScore.marginTop);
    };

};
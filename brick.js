const ParameterBrick = {
    marginLeft: 25,
    marginTop: 50,
    marginBetween: 25,
    widthBrick: 70,
    heightBrick: 15,
    rowBrick: 5,
    columBrick: 5,
    color: '#610B0B',
    score: 0
};

let Bricks = function() {
    this.offsetX = ParameterBrick.marginLeft;
    this.offsetY = ParameterBrick.marginTop;
    this.margin = ParameterBrick.marginBetween;
    this.width = ParameterBrick.widthBrick;
    this.height = ParameterBrick.heightBrick;
    this.totalRow = ParameterBrick.rowBrick;
    this.totalCol = ParameterBrick.columBrick;
    this.score = ParameterBrick.score;
    this.x;
    this.y;
    this.isBroken = false;
    this.color = ParameterBrick.color;
    this.setX = function(x) {
        this.x = this.offsetX + x * (this.margin + this.width);
    };

    this.getX = function() {
        return this.x;
    };

    this.getStatusbrick = function() {
        return this.isBroken;
    };

    this.setStatusbrick = function(status) {
        this.isBroken = status;
    };

    this.setY = function(y) {
        this.y = this.offsetY + y * (this.margin + this.height);
    };

    this.getY = function() {
        return this.y;
    };

    this.getScore = function() {
        return this.score;
    };

    this.setScore = function(score) {
        this.score += score;
    };

    this.draw = function(context, x, y) {
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();

    };
};
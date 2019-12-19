const ParameterPaddle = {
    width: 70,
    height: 12,
    botMargin: 50,
    speed: 5,
    color: '#20B2AA'

};
let Paddle = function() {
    this.width = ParameterPaddle.width;
    this.height = ParameterPaddle.height;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - ParameterPaddle.botMargin;
    this.speed = ParameterPaddle.speed;
    this.color = ParameterPaddle.color;
    this.isleft = false;
    this.isright = false;
    this.moveLeft = function() {
        if (this.isleft) {
            this.x -= this.speed;
        }
    };

    this.moveRight = function() {
        if (this.isright) {
            this.x += this.speed;
        }

    };

    this.movePaddle = function() {
        this.moveLeft();
        this.moveRight();
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width;
        }
    };

    this.touchBall = function(ball) {
        if (ball.x + ball.radius > this.x && ball.x + ball.radius < this.x + this.width &&
            ball.y + ball.radius > this.y && ball.y - ball.radius < this.y + this.height) {
            ball.dx = ParameterBall.dxBall;
            ball.dy = ParameterBall.dyBall;

        }
    };
    this.resetPaddle = function() {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - ParameterPaddle.botMargin;
    };
    this.draw = function(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

};
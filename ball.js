const ParameterBall = {
    radius: 7,
    live: 2,
    dxBall: 3,
    dyBall: 3,
    heightBall: 60,
    color: '#000000'
};
let Ball = function() {
    this.x = canvas.width / 2;
    this.radius = ParameterBall.radius;
    this.y = canvas.height - ParameterBall.heightBall - this.radius;
    this.dx = ParameterBall.dxBall;
    this.dy = ParameterBall.dyBall;
    this.color = ParameterBall.color;
    this.live = ParameterBall.live;
    this.moveX = function() {
        this.x -= this.dx;
    };

    this.moveY = function() {
        this.y -= this.dy;
    };

    this.moveball = function() {
        this.moveX();
        this.moveY();
        if (this.x < this.radius || this.x > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
    };
    this.draw = function(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
    this.liveBall = function() {
        if (this.y + this.radius > canvas.height) {
            this.live--;
            this.resetBall();
        }
    };
    this.getlive = function() {
        return this.live;
    };
    this.resetBall = function() {
        this.x = canvas.width / 2;
        this.y = canvas.height - ParameterBall.heightBall - this.radius;
        this.dx = ParameterBall.dxBall;
        this.dy = ParameterBall.dyBall;
    };
};
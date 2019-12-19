let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let isGameover = false;
let ball = new Ball();
let paddle = new Paddle();
let bricks = new Bricks();
let text = new Text();
let brickarr = [];
let img = new Image();

for (let i = 0; i < bricks.totalRow; i++) {
    brickarr[i] = [];
    for (let j = 0; j < bricks.totalCol; j++) {
        brickarr[i][j] = {
            x: bricks.getX(bricks.setX(j)),
            y: bricks.getY(bricks.setY(i)),
            isBroken: bricks.getStatusbrick()
        }
    }
}

function createBrick() {
    for (let i = 0; i < bricks.totalRow; i++) {
        for (let j = 0; j < bricks.totalCol; j++) {
            if (!brickarr[i][j].isBroken) {
                bricks.draw(ctx, brickarr[i][j].x, brickarr[i][j].y);
            }
        }
    }

}

function ballTouchBricks() {
    for (let i = 0; i < bricks.totalRow; i++) {
        for (let j = 0; j < bricks.totalCol; j++) {
            if (!brickarr[i][j].isBroken) {

                if (ball.x + ball.radius >= brickarr[i][j].x && ball.x + ball.radius <= brickarr[i][j].x + bricks.width &&
                    ball.y + ball.radius >= brickarr[i][j].y && ball.y - ball.radius <= brickarr[i][j].y + bricks.height) {
                    ball.dy = -ball.dy;
                    bricks.getScore(bricks.setScore(1));
                    brickarr[i][j].isBroken = true;
                }
            }
        }
    }
}

function onKeyup(evt) {
    switch (evt.keyCode) {
        case 37:
            paddle.isleft = false;
            break;
        case 39:
            paddle.isright = false;
            break;
        default:
            break;
    }
}

function onKeydown(evt) {
    switch (evt.keyCode) {
        case 37:
            paddle.isleft = true;
            break;
        case 39:
            paddle.isright = true;
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', onKeyup);
document.addEventListener('keydown', onKeydown);
document.addEventListener('keydown', pauseGame);

function checkGameover() {
    if (ball.y > canvas.height - ball.radius) {
        ball.liveBall();
        paddle.resetPaddle();
        if (ball.getlive() <= 0) {
            isGameover = true;
            alert("GAME OVER !!!")
            document.location.reload();
        }
    }
}

function checkWin() {
    if (bricks.getScore() >= bricks.totalCol * bricks.totalRow) {
        alert("YOU WIN !!!")
        cancelAnimationFrame(playGame());
    }
}

function pauseGame(evt) {
    switch (evt.keyCode) {
        case 32:
            alert("GAME PAUSE !!!");
            break;
    }
}


function playGame() {
    if (!isGameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.draw(ctx);
        paddle.draw(ctx);
        ball.moveball();
        paddle.movePaddle();
        createBrick();
        paddle.touchBall(ball);
        ballTouchBricks();
        text.showScore(ctx, bricks);
        text.showLive(ctx, ball);
        checkWin();
        checkGameover();
        requestAnimationFrame(playGame);
    }

}
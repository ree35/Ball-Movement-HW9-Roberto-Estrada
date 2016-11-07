var myBall;
var myBall2;
var myBall3;

function setup() {
    createCanvas(1000, 1000);
    background(255,0,255);
    myBall = new Ball(200);
    myBall2 = new Ball(400);
    myBall3 = new Ball(600);
}

function draw() {
    background(255,230,0);
    myBall.animate();
    myBall.display();
    myBall2.animate();
    myBall2.display();
    myBall3.animate();
    myBall3.display();
}

function Ball(yPos) {
    this.x = 0;
    this.y = yPos;
    this.step = 2;
    this.animate = function () {
        this.x += this.step;
        if (this.x > width) {
            this.step = this.step * (-1);
        }
    }
    this.display = function () {
        ellipse(this.x, this.y, 20, 40);
    }
};
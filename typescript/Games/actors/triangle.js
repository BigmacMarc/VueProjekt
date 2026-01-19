export class Triangle {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    update(deltaTime) {
        this.x += deltaTime * 100;
    }
    render(ctx) {
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(this.x + this.sizeX / 2, this.y);
        ctx.lineTo(this.x, this.y + this.sizeY);
        ctx.lineTo(this.x + this.sizeX, this.y + this.sizeY);
        ctx.closePath();
        ctx.fill();
    }
}

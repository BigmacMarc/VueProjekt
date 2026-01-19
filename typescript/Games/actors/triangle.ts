import { Actor } from "./Actor";

export class Triangle implements Actor {
  constructor(
    private x: number,
    private y: number,
    private sizeX: number,
    private sizeY: number
  ) {}

  update(deltaTime: number): void {
    this.x += deltaTime * 100;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(this.x + this.sizeX / 2, this.y);
    ctx.lineTo(this.x, this.y + this.sizeY);
    ctx.lineTo(this.x + this.sizeX, this.y + this.sizeY);
    ctx.closePath();
    ctx.fill();
  }
}

// MyGame - Example implementation of Game interface
import { Triangle } from "./actors/triangle.js";
import { Actor } from "./actors/Actor.js";

class MyGame extends Game {
    constructor() {
        super();
        this.actors = [];
    }
    addActor(actor) {
        this.actors.push(actor);
    }
    init() {
        console.log("Game started!");
        const tr1 = new Triangle(450, 250, 60, 50);
        this.addActor(tr1);
    }
    update(deltaTime) {
        console.log("inside update", deltaTime);
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        console.log("in renders");
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

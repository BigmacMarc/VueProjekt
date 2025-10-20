import { Engine } from "./engine";

export class Car {
    private color: string;
    private year: number;
    private engine: Engine;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
        this.engine = new Engine(150, "V6");
    }

    public getColor(): string {
        return this.color;
    }

}
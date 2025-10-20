export class Engine {
    private horsepower: number;
    private type: string;

    constructor(horsepower: number, type: string) {
        this.horsepower = horsepower;
        this.type = type;
    }

    public getHorsepower(): number {
        return this.horsepower;
    }

    public setHorsepower(horsepower: number) {
        this.horsepower = horsepower;
    }
}
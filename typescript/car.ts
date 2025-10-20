export class Car {
    private color: string;
    private year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    public getColor(): string {
        return this.color;
    }

}
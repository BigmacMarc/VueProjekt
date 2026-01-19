import { Car } from "./car";
import { Engine } from "./engine";

const myCar = new Car("red", 2020);
const engine = new Engine(150, "Diesel");

console.log(myCar.getColor());
console.log(engine.getHorsepower());
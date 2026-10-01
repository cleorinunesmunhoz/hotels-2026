import { RoomType } from "../enum/RoomType";
import Database from "../database/Database";


export default class Room {

    private number: number;
    private type: RoomType;
    private days: number;

    constructor(number: number, type: RoomType, days: number) {
        this.number = number;
        this.type = type;
        this.days = days;
    }

    public get getNumber(): number {
        return this.number;
    }

    public get getType(): string {
        return this.type;
    }

    public get getDays(): number {
        return this.days;
    }

    public set setDays(newDays: number) {
        this.days = newDays;
    }

    public showData(): void {

        console.log("Quarto: " + this.number);

        console.log("Tipo: " + this.type);

        console.log("Dias: " + this.days);
    }
}
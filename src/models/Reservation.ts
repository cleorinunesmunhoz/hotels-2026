import Room from "./Room";
import Client from "./Client";
import Database from "../database/Database";
import Listable from "../interface/Listable";

export default class Reservation implements Listable {
    private client: Client;
    private room: Room;
    private days: number;
    private totalValue: number = 0;
    private database: Database = new Database();

    constructor(client: Client, room: Room, days: number) {
        this.client = client;
        this.room = room;
        this.days = days;
        this.valueDays();
    }

    public get getClient(): Client { return this.client; }
    public get getRoom(): Room { return this.room; }
    public get getDays(): number { return this.days; }
    public get getTotalValue(): number { return this.totalValue; }

    public set setDays(newDays: number) {
        this.days = newDays;
        this.valueDays();
    }

    public valueDays(): void {
        this.totalValue = this.room.getValue * this.days;
    }

    // Cumprindo a interface Listable 
    public showData(): void {
        console.log(`Reserva | Cliente: ${this.client.getName()} | Quarto: ${this.room.getNumber} (${this.room.getType}) | Dias: ${this.days} | Total: R$ ${this.totalValue}`);
    }

    // --- SOBRECARGA ---
    public setPayer(payer: Client): string;
    public setPayer(cpf: number): string;
    public setPayer(payer: Client | number): string {
        const clientFound = typeof payer === "number" 
            ? this.database.client.find((c) => c.getCpf() === payer) 
            : payer;

        if (!clientFound) return "Cliente não encontrado!";
        return `O pagador é ${clientFound.getName()}`;
    }
}
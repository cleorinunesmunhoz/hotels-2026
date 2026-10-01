import Client from "./Client";
import Room from "./Room";
import { RoomType } from "../enum/RoomType";

export default class Reservation {

    private client: Client;

    private room: Room;

    private daysReservation: number;

    //INJECAO DE DEPENDENCIA, VIA CONSTRUTOR
    constructor(
        client: Client,
        room: Room,
        daysReservation: number
    ) {

        this.client = client;

        this.room = room;

        this.daysReservation = daysReservation;
    }

    public calculateTotal(): number {

        let dailyValue: number = 0;

        switch (this.room.getType) {

            case RoomType.SOLTEIRO:

                dailyValue = 100;

                break;

            case RoomType.CASAL:

                dailyValue = 200;

                break;

            case RoomType.LUXO:

                dailyValue = 500;

                break;
        }

        return dailyValue * this.daysReservation;
    }

    public showData(): void {

        console.log("------ RESERVA ------");

        console.log(`Cliente: ${this.client.getName}`);

        console.log(`Quarto: ${this.room.getNumber}`);

        console.log(`Tipo: ${this.room.getType}`);

        console.log(`Dias: ${this.daysReservation}`);

        console.log(
            `Valor total: R$ ${this.calculateTotal()}`
        );
    }
}
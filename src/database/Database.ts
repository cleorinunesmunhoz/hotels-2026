import Client from "../models/Client";
import Person from "../models/Person";
import { RoomType } from "../enum/RoomType";
import Reservation from "../models/Reservation";
import Room from "../models/Room";

export default class Database {

    public person : Person [] = [];

    public client: Client [] = [];

    public roomtype: RoomType [] =[];

    public reservation: Reservation [] = [];

    public room : Room []=[];
}
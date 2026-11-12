import User from "../models/User";
import Room from "../models/Room";
import { RoomType } from "../enum/RoomType";

export default class Database {
  public user: User[] = [];
  public room: Room[] = [];

  //aqui estou criando para ficar valor certo da
  //de casal, 20 de solteiro e 10 luxo.
  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.room.push(new Room(i, RoomType.CASAL));
    }
    for (let i = 21; i <= 40; i++) {
      this.room.push(new Room(i, RoomType.SOLTEIRO));
    }
    for (let i = 41; i <= 50; i++) {
      this.room.push(new Room(i, RoomType.LUXO));
    }
  }
}

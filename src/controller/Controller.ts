import Person from "../models/User";
import { RoomType } from "../enum/RoomType";
import Database from "../database/Database";
import { UserRole } from "../enum/UserRole";
import User from "../models/User";

export default class Controller {
  private db: Database;

  constructor() {
    this.db = new Database();
  }
  public createUser(cpf: number, name: string, role: UserRole): void {
    const newUser = new User(cpf, name, role);

    switch (role) {
      case UserRole.FUNCIONARIO:
        this.db.FUNCIONARIO.push();
        console.log(`Funcionário ${name} cadastrado com sucesso!`);
        break;

      case UserRole.TERCEIRIZADO:
        this.db.TERCEIRIZADO.push();
        console.log(`Terceirizado ${name} cadastrado com sucesso!`);
        break;

      case UserRole.ADM:
        this.db.ADM.push();
        console.log(`Administrador ${name} cadastrado com sucesso!`);
        break;

      case UserRole.CLIENTE:
      default:
        this.db.CLIENTE.push();
        console.log(`Cliente ${name} cadastrado com sucesso!`);
        break;
    }
  }
}

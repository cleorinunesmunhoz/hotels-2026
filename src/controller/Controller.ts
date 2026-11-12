import Database from "../database/Database";
import User from "../models/User";
import Client from "../models/Client";
import Employee from "../models/Employee";
import Outsourced from "../models/Outsourced";
import ADM from "../models/ADM";
import Room from "../models/Room";
import Reservation from "../models/ServiceReservation";
import { UserRole } from "../enum/UserRole";
import HotelError from "../exceptions/HotelError";

export default class Controller {
  private db: Database;
  private reservations: Reservation[] = [];

  constructor() {
    this.db = new Database();
  }

  public findUserByCpf(cpf: number): User | undefined {
    return this.db.user.find((u) => u.getCpf() === cpf);
  }

  public findClientByCpf(cpf: number): Client | undefined {
    const user = this.findUserByCpf(cpf);
    if (user instanceof Client) {
      return user;
    }
    return undefined;
  }

  public findRoomByNumber(roomNumber: number): Room | undefined {
    return this.db.room.find((r) => r.getNumber === roomNumber);
  }

  // --- CRIAÇÃO DE USUÁRIO (POLIMORFISMO) ---
  public createUser(
    cpf: number,
    name: string,
    role: UserRole,
    extraParam?: number
  ): void {
    if (!name || name.trim() === "" || isNaN(cpf) || cpf <= 0) {
      throw new HotelError("Nome ou CPF inválido.");
    }

    if (this.findUserByCpf(cpf)) {
      throw new HotelError("Já existe um usuário com este CPF.");
    }

    let newUser: User;

    switch (role) {
      case UserRole.FUNCIONARIO:
        if (isNaN(Number(extraParam)) || Number(extraParam) <= 0) {
          throw new HotelError("Salário inválido para o funcionário.");
        }
        newUser = new Employee(extraParam!, cpf, name, role);
        break;

      case UserRole.TERCEIRIZADO:
        newUser = new Outsourced(cpf, name, role);
        break;

      case UserRole.ADM:
        newUser = new ADM(cpf, name, role);
        break;

      case UserRole.CLIENTE:
      default:
        if (isNaN(Number(extraParam)) || Number(extraParam) <= 0) {
          throw new HotelError("CEP inválido para o cliente.");
        }
        newUser = new Client(extraParam!, cpf, name, role);
        break;
    }

    this.db.user.push(newUser);
    console.log(`\n✅ Cadastrado com sucesso:`);
    newUser.showData();
  }

  // --- CRIAÇÃO DE RESERVA ---
  public createReservation(
    cpf: number,
    roomNumber: number,
    days: number
  ): void {
    if (isNaN(cpf) || isNaN(roomNumber) || isNaN(days) || days <= 0) {
      throw new HotelError("Dados da reserva inválidos.");
    }

    const client = this.findClientByCpf(cpf);
    if (!client) {
      throw new HotelError("Cliente não encontrado para este CPF.");
    }

    const room = this.findRoomByNumber(roomNumber);
    if (!room) {
      throw new HotelError("Quarto não encontrado.");
    }

    const newRes = new Reservation(client, room, days);
    this.reservations.push(newRes);
    console.log("\n✅ Reserva cadastrada com sucesso!");
    newRes.showData();
  }

  // --- LISTAGENS ---
  public listUsersAndReservations(): void {
    console.log("\n--- LISTA DE USUÁRIOS ---");
    if (this.db.user.length === 0) {
      console.log("Nenhum usuário cadastrado.");
    } else {
      this.db.user.forEach((user) => user.showData());
    }

    console.log("\n--- LISTA DE RESERVAS ---");
    if (this.reservations.length === 0) {
      console.log("Nenhuma reserva cadastrada.");
    } else {
      this.reservations.forEach((res) => res.showData());
    }
  }

  public listRooms(): void {
    console.log("\n--- LISTA DE QUARTOS ---");
    this.db.room.forEach((room) => room.showData());
  }
}
import { UserRole } from "../enum/UserRole";
import User from "./User";

export default class ADM extends User {
  constructor(cpf: number, name: string, role: UserRole) {
    super(cpf, name, UserRole.ADM);
  }
}

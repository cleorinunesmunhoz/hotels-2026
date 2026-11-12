import { UserRole } from "../enum/UserRole";
import User from "./User";
import Ilistable from "../interface/Ilistable";

export default class Outsourced extends User implements Ilistable {
  constructor(cpf: number, name: string, role: UserRole) {
    super(cpf, name, UserRole.TERCEIRIZADO);
  }
}

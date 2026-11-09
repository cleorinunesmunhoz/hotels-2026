import { UserRole } from "../enum/UserRole";
import User from "./User";

export default class Employee extends User {
  private salary: number;

  constructor(
    salary: number,
    cpf: number,
    name: string,
    role: UserRole = UserRole.FUNCIONARIO
  ) {
    super(cpf, name, role);
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(value: number): void {
    this.salary = value;
  }

  public showData(): void {
    console.log(
      `Funcionário: ${this.getName()} | CPF: ${this.getCpf()} | Salário: R$ ${
        this.salary
      } | Role: ${this.getRole()}`
    );
  }
}

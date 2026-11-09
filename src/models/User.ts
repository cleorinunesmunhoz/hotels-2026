import { UserRole } from "../enum/UserRole";

export default abstract class User {
  public cpf: number;
  public name: string;
  public role: UserRole;

  constructor(cpf: number, name: string, role: UserRole) {
    this.cpf = cpf;
    this.name = name;
    this.role = role;
  }

  public getCpf(): number {
    return this.cpf;
  }

  public setCpf(newCpf: number): void {
    this.cpf = newCpf;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string): void {
    this.name = newName;
  }

  public getRole(): UserRole {
    return this.role;
  }

  public setRole(newRole: UserRole): void {
    this.role = newRole;
  }

  public showData(): void {
    console.log(`CPF: ${this.cpf} | Nome: ${this.name} | Perfil: ${this.role}`);
  }
}

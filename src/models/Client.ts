import { UserRole } from "../enum/UserRole";
import User from "./User";

export default class Client extends User {
     private cep: number;
    constructor(cep: number, cpf: number,  name: string, role: UserRole) {
        super(cpf, name, UserRole.CLIENTE);
        this.cep = cep;
        
    }
    public getCep(): number {
        return this.cep;
    }
    public setCep(cep: number): void {
        this.cep = cep;
    }
    public showData(): void {
     console.log(`Cliente CPF: ${this.getCpf()}, Nome: ${this.getName()}, CEP: ${this.cep}, Role: ${this.getRole()}`);
        
    }
}
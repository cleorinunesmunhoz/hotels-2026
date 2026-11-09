import Employee from "./models/Employee";
import { UserRole } from "./enum/UserRole";

// 1. Criamos um funcionário (Salário, CPF, Nome, Role)
const func1 = new Employee(3500, 98765432100, "Carlos Silva", UserRole.FUNCIONARIO);

// 2. Lemos os dados com os getters
console.log("=== DADOS DO FUNCIONÁRIO ===");
console.log("Nome:", func1.getName());
console.log("CPF:", func1.getCpf());
console.log("Salário inicial:", func1.getSalary());

// 3. Alteramos o salário com o setter
func1.setSalary(4200);

// 4. Lemos o novo salário
console.log("\n=== APÓS REAJUSTE DE SALÁRIO ===");
console.log("Novo Salário:", func1.getSalary());
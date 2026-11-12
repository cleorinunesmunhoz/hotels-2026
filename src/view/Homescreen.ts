import promptSync = require("prompt-sync");
const prompt = promptSync();
import Controller from "../controller/Controller";
import { UserRole } from "../enum/UserRole";
import HotelError from "../exceptions/HotelError";

export default class Homescreen {
  private controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  public initialScreen(): void {
    let option: number = 0;

    while (option !== 5) {
      console.log("\n=================================");
      console.log("          Hotel da Cleo          ");
      console.log("=================================");
      console.log("1. Cadastrar usuário");
      console.log("2. Cadastrar reserva");
      console.log("3. Listar usuários e reservas");
      console.log("4. Listar quartos");
      console.log("5. Sair");

      try {
        option = Number(prompt("Escolha uma opção: "));

        switch (option) {
          case 1: {
            console.log("\n--- CADASTRO DE USUÁRIO ---");
            const name = prompt("Digite o nome: ");
            const cpf = Number(prompt("Digite o CPF: "));

            console.log(
              "Perfis: 1- CLIENTE | 2- FUNCIONARIO | 3- TERCEIRIZADO | 4- ADM"
            );
            const roleOption = Number(prompt("Escolha o perfil: "));

            let role: UserRole = UserRole.CLIENTE;
            let extraParam: number | undefined;

            if (roleOption === 2) {
              role = UserRole.FUNCIONARIO;
              extraParam = Number(prompt("Digite o salário: "));
            } else if (roleOption === 3) {
              role = UserRole.TERCEIRIZADO;
            } else if (roleOption === 4) {
              role = UserRole.ADM;
            } else {
              role = UserRole.CLIENTE;
              extraParam = Number(prompt("Digite o CEP do cliente: "));
            }

            this.controller.createUser(cpf, name, role, extraParam);
            break;
          }

          case 2: {
            console.log("\n--- NOVA RESERVA ---");
            const cpfReservation = Number(prompt("Digite o CPF do cliente: "));
            const roomNumber = Number(prompt("Digite o número do quarto: "));
            const days = Number(prompt("Digite quantos dias de estadia: "));

            this.controller.createReservation(cpfReservation, roomNumber, days);
            break;
          }

          case 3: {
            this.controller.listUsersAndReservations();
            break;
          }

          case 4: {
            this.controller.listRooms();
            break;
          }

          case 5: {
            console.log("\nSistema encerrado. Até logo!");
            break;
          }

          default: {
            throw new HotelError("Opção inválida. Escolha de 1 a 5.");
          }
        }
      } catch (error) {
        if (error instanceof HotelError) {
          console.log(`\n❌ Erro: ${error.message}`);
        } else {
          console.log("\n❌ Erro inesperado no sistema.");
        }
      }
    }
  }
}

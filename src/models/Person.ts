export default class Person {

    private cpf: number;

    constructor(cpf: number) {
        this.cpf = cpf;
    }
    public get getCpf():number {
        return this.cpf;
    }
    public set setCpf
     (NewCpf:number) {
        this.cpf = NewCpf;
    }
    //metodo para mostrar dados, aqui a classe pai herda para a classe filha client,
    //e na classe filha fica mais adaptado
    public showData(): void {
        console.log("Nome: " + this.getCpf);
    }
    
}
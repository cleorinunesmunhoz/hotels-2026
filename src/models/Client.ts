import Person from "./Person";

export default class Client extends Person{

    private name: string;

    constructor(name: string, cpf:number) {
        super(cpf);
        this.name = name;
    }
    public get getName(): string {
        return this.name;
    }
    public set setName(newName: string) {
        this.name = newName;
    }
}
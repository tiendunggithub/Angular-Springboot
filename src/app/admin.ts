export class Admin {
    id: number;
    Name: string;
    Username: string;
    Pass: string;

    constructor(id: number, Name: string, Username: string, Pass: string){
        this.id = id;
        this.Name = Name;
        this.Username = Username;
        this.Pass = Pass;
    }
}

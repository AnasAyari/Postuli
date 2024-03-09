import { Worker } from "./worker";
export class Application {
    constructor(public worker:Worker,public titre:string,public description:string,public services:string[],public prix:number,public statut:boolean){
        this.worker = worker,
        this.titre = titre,
        this.description = description,
        this.services = services,
        this.statut = statut
    }
}

import { User } from "./user";

export class Entreprise {
    constructor(public user:User,public secteurActivite:string,public taille:number,public chiffreAffaires:number,public statutJuridique:string,public pays:string){
        this.user = user,
        this.secteurActivite = secteurActivite,
        this.taille = taille,
        this.chiffreAffaires = chiffreAffaires,
        this.statutJuridique = statutJuridique,
        this.pays = pays
    }
}

import { Entreprise } from "./entreprise";

export class Poste {
    constructor(public entreprise:Entreprise,public description:string,public requiredSkills:any[],public requiredExperience:any[],public salaire:number,public negociable:boolean,public statut:boolean){
        this.entreprise = entreprise,
        this.description = description,
        this.requiredSkills = requiredSkills,
        this.requiredExperience = requiredExperience,
        this.salaire = salaire,
        this.negociable = negociable,
        this.statut = statut
    }
}

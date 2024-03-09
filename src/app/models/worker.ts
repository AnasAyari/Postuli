import { User } from "./user";

export class Worker {
    constructor(public user:User,public skills:any[],public experiences:any[]){
        this.user = user;
        this.skills = skills
        this.experiences = experiences
    }
}

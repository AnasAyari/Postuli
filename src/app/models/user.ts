export class User {
    constructor(public username:string,public password:string,public fullname:string,public  description:string,public reseauxSociaux:any[],public birthday:string,public phone:string,public role:string,public pdp:string){
        this.username = username,
        this.password = password,
        this.fullname = fullname,
        this.description = description,
        this.reseauxSociaux = reseauxSociaux,
        this.birthday = birthday,
        this.phone = phone,
        this.role = role,
        this.pdp = pdp
    }
}

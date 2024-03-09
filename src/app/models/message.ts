import { Discussion } from "./discussion";
import { User } from "./user";

export class Message {
    constructor(public sender:User,public discussion:Discussion,public message:Message){}
}

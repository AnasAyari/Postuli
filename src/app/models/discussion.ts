import { Message } from "./message";
import { User } from "./user";

export class Discussion {
    constructor(public user1:User,public user2:User,public messages:Message[]){}
}

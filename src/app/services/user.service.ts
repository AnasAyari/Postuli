import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject<any>(null)
  getUser=this.user.asObservable()
  constructor() { }
  setUser(client:any){
    this.user.next(client)
  }
}

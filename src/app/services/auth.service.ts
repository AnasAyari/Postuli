import { Injectable } from '@angular/core';
import { environment } from '../../../environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.apiUrl+"/auth"
  constructor(private http:HttpClient,private router:Router) { }

  signup(form:any):Observable<any>{
    return this.http.post<any>(this.url+'/signup',form)
  }

  login(form:any):Observable<any>{
    return this.http.post<any>(this.url+"/login",form)
  }

  logout(){
    sessionStorage.removeItem("Token");
    this.router.navigate(["/client"])
  }
}

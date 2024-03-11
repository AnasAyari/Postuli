import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  private url = 'http://127.0.0.1:3000/3000/api/auth';

  addApplication(articleData: any){
    return this.http.post(this.url+ "/add", articleData);
  }

  getApplication(id: any){
    return this.http.get(this.url+ "/add", id);
  }

  updateApplication(id :any){
    return this.http.put(this.url+ "/", id);
  }

  delete(id :any){
    return this.http.delete(this.url+ "/", id);
  }


  


  

  
}

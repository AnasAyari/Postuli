import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environement';
import { Observable } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http : HttpClient) { }
  private url = environment.apiUrl+"/app";

  addApplication(articleData: Application,headers?: HttpHeaders):Observable<Application>{
    return this.http.post<Application>(this.url+"/add", articleData,{ headers: headers });
  }

  updateApp(id:string,form:Application,headers?: HttpHeaders):Observable<Application>{
    return this.http.put<Application>(`${this.url}/${id}`,form,{ headers: headers });
  }

  deleteApp(id:string,headers?: HttpHeaders):Observable<Application>{
    return this.http.delete<Application>(`${this.url}/${id}`,{ headers: headers });
  }

  getAllApps(id:string):Observable<Application[]>{
    return this.http.get<Application[]>(this.url);
  }

  getAppById(id:string):Observable<Application>{
    return this.http.get<Application>(`${this.url}/${id}`);
  }
}

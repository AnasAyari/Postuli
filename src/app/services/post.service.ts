import { Injectable } from '@angular/core';
import { environment } from '../../../environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poste } from '../models/poste';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url=environment.apiUrl+"/posts"
  constructor(private http:HttpClient) { }

  addPost(form:Poste,headers?: HttpHeaders):Observable<Poste>{
    return this.http.post<Poste>(this.url,form)
  }

  updatePost(id:string,form:Poste,headers?: HttpHeaders):Observable<Poste>{
    return this.http.put<Poste>(`${this.url}/${id}`,form);
  }

  deletePost(id:string,headers?: HttpHeaders):Observable<Poste>{
    return this.http.delete<Poste>(`${this.url}/${id}`);
  }

  getAllPosts():Observable<Poste[]>{
    return this.http.get<Poste[]>(this.url);
  }

  getAppById(id:string):Observable<Poste>{
    return this.http.get<Poste>(`${this.url}/${id}`);
  }

}

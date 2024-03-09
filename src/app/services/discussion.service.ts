import { Injectable } from '@angular/core';
import { environment } from '../../../environement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Discussion } from '../models/discussion';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  url=environment.apiUrl+"/discussion"
  constructor(private http:HttpClient) { }

  createDiscussion(form: Discussion,headers?: HttpHeaders):Observable<Discussion>{
    return this.http.post<Discussion>(this.url+"/add", form,{ headers: headers });
  }

  sendMessage(id:string,form:Message,headers?: HttpHeaders):Observable<Discussion>{
    return this.http.post<Discussion>(`${this.url}/send/${id}`,form,{ headers: headers });
  }

  deleteDiscussion(id:string,headers?: HttpHeaders):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`,{ headers: headers });
  }

  getAllDiscussions(headers?: HttpHeaders):Observable<Discussion[]>{
    return this.http.get<Discussion[]>(this.url);
  }

}

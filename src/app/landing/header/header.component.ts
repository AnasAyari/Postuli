import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!:any
  headers: HttpHeaders;
  constructor(private userService:UserService){}
  ngOnInit(){
    this.userService.user.subscribe((user) => {
      this.user = user
      console.log({ user })
      if (user) {
        const token = sessionStorage.getItem('Token')

        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService:AuthService,private uservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted!');
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res)=>{
        console.log("res",res);
        sessionStorage.setItem('Token',res.token);
        this.uservice.setUser(res.user);
        this.router.navigate(["/home"])
      })
    }
  }
}

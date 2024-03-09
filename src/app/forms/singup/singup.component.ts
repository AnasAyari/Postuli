import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')],
      accountType: [''],
      // Additional fields for worker
      skillName: [''],
      skillLevel: [''],
      skills: this.fb.array([]),
      // Additional fields for enterprise
      secteurActivite: [''],
      tailleDEntreprise: [''],
      chiffreAffaires: [''],
      statutJuridique: [''],
      paysDOrigine: ['']
    }, { validator: this.checkPasswords });
  }

  get skillsFormArray() {
    return this.signupForm.get('skills') as FormArray;
  }

  addSkill() {
    const skillGroup = this.fb.group({
      skillName: ['', Validators.required],
      skillLevel: ['', Validators.required]
    });
    this.skillsFormArray.push(skillGroup);
  }


  checkPasswords(group: FormGroup) { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('repeatPassword')?.value;

    return pass === confirmPass ? null : { passwordMismatch: true }     
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}
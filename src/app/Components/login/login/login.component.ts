import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardServiceService } from 'src/app/services/authguard-service.service';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  user='1';
  constructor(private formBuilder: FormBuilder, private User: UserService ,private router: Router ,private authService:AuthguardServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    })
    localStorage.setItem("SessionUser",this.user)
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.valid) {

      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      console.log(this.loginForm.value);
      this.User.login(reqdata).subscribe((Response: any) => {
        console.log(Response);
        localStorage.setItem("token", Response.id)
        this.router.navigateByUrl('/dashboard/notes');
        
      }, (error: any) => {
        console.log(error);
      })
    }
  }
}
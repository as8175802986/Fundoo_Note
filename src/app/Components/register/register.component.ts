import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  inputType = 'password'
  constructor(private formBuilder: FormBuilder, private User: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-z0-9]+(.[a-z0-9]+)?@[a-z]+[.][a-z]{3}$")]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      Address: ['', Validators.required]

      // acceptTerms: [false, Validators.requiredTrue]
    })
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
      // service:this.registerForm.value.service  
    }
    else {
      if (this.registerForm.value.Password === this.registerForm.value.ConfirmPassword) {
        console.log("Regestration method calling", this.registerForm.value);
        let reqdata = {
          fname: this.registerForm.value.firstName,
          lname: this.registerForm.value.lastName,
          email: this.registerForm.value.email,
          password: this.registerForm.value.Password,
          adress: this.registerForm.value.Address,
          phone: this.registerForm.value.Phone
        }
        console.log(this.registerForm.value);
        this.User.register(reqdata).subscribe((Response: any) => {
          console.log(Response);
        }, (error: any) => {
          console.log(error);
        })
      }
      else {
        //code to display password & cPassword do not match 
      }
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}



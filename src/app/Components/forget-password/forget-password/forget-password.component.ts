import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private User: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-z0-9]+(.[a-z0-9]+)?@[a-z]+[.][a-z]{3}$")]],
    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.forgetPasswordForm.valid) {
      console.log("forgetpassword form calling", this.forgetPasswordForm.value);
      let req = {
        email: this.forgetPasswordForm.value.email


      }
      console.log(req);

      console.log(this.forgetPasswordForm.value);
      this.User.forgetPassword(this.forgetPasswordForm.value.email)
        .subscribe((res: any) => {
          console.log(res);

        })

    }
    else {
      console.log("Email or phone number is necessory", this.forgetPasswordForm.value);
      return;
    }

  }
  // onReset() {
  //   this.submitted = false;
  //   this.forgetPasswordForm.reset();
  // }
}

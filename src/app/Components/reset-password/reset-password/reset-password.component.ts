import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private User: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetForm = this.formBuilder.group({

      Password: ['', [Validators.required, Validators.minLength(6)]],
      // CPassword: ['', Validators.required],
    })
  }
  onSubmit() {
    this.submitted = true
    if (this.resetForm.valid) {

      let req = {
        Password: this.resetForm.value.Password,
        // password:this.resetPasswordForm.value.password,
        // confirmPassword:this.resetPasswordForm.value.confirmPassword

      }
      console.log("Reset password method calling", this.resetForm.value);
      console.log(req);
      this.User.resetPassword(req, this.token).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("token",res.id)
      }, error => {
        console.log(error);
      })


    }

    else {
      console.log("Password is not valid", this.resetForm.value);
      return;
    }

  }
  onReset() {
    this.submitted = false;
    this.resetForm.reset();
  }
}



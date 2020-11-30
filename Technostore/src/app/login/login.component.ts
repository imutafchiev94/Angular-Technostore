import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })

    console.log(this.loginForm);
   }

  ngOnInit(): void {
  }

  login()
  {
    console.log(this.loginForm.value);
  }

  get username() {
    console.log(this.loginForm.get('username'))
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

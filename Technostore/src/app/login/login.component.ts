import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private  authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })

    console.log(this.loginForm);
   }

  ngOnInit(): void {
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['categories']);
    }
  }

  login()
  {
    this.authService.login(this.loginForm.value).
    subscribe(data => 
      {
        this.authService.saveToken(data['token'])
        this.authService.saveAdminToken(data['adminToken'])
      });
  }

  get username() {
    console.log(this.loginForm.get('username'))
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

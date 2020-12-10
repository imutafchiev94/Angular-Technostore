import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = fb.group({
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'name': ['', Validators.required],
      'country': ['', Validators.required],
      'city': ['', Validators.required],
      'address': ['', Validators.required],
      'avatar': ['', Validators.required],
      'role': ['User'],
    })
   }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(
      data => {
        this.router.navigate(['home']);
      }
    )
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get city() {
    return this.registerForm.get('city');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get avatar() {
    return this.registerForm.get('avatar');
  }


}

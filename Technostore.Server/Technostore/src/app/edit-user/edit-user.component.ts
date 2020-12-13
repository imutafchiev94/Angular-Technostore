import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
      
    }

  ngOnInit(): void {
    this.authService.getUser().subscribe(res => {
      this.user = res;
      console.log(this.user);
    this.userForm = this.fb.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'city': ['', Validators.required],
      'country': ['', Validators.required],
      'avatar': ['', Validators.required],
   })
  })
  }

  edit() {
    return this.authService.editUser(this.userForm.value).subscribe(res => {
      console.log(this.userForm.value);
      this.router.navigate(['user/details']);
    })
  }


  get name() {
    return this.userForm.get('name');
  }

  get address() {
    return this.userForm.get('address');
  }

  get city() {
    return this.userForm.get('city');
  }

  get country() {
    return this.userForm.get('contry');
  }

  get avatar() {
    return this.userForm.get('avatar');
  }

}

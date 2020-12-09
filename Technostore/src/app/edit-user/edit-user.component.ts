import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
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
       authService.getUser().subscribe(res => {
        this.user = res;
      this.userForm = this.fb.group({
        'firstName': [this.user.firstName, Validators.required],
        'lastName': [this.user.lastName, Validators.required],
        'address': [this.user.address, Validators.required],
        'city': [this.user.city, Validators.required],
        'country': [this.user.country, Validators.required],
        'avatar': [this.user.avatar, Validators.required],
     })
    })
    }

  ngOnInit(): void {
    
  }

  edit() {
    return this.authService.editUser(this.userForm.value).subscribe(res => {
      this.router.navigate(['user/details']);
    })
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get address() {
    return this.userForm.get('address');
  }

  get city() {
    return this.userForm.get('city');
  }

  get contry() {
    return this.userForm.get('contry');
  }

  get avatar() {
    return this.userForm.get('avatar');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) { 
    this.fetchData();
  }

  ngOnInit(): void {

  }

  fetchData() {
    this.authService.getUser().subscribe(res => {
      this.user = res;
    })
  }

  edit() {
    this.router.navigate(['user/edit/']);
  }

}

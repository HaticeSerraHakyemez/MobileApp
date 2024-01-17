import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  adminLogIn(){
    this.router.navigate(['/admin-log-in'])
  }
  userLogIn(){
    this.router.navigate(['/user-log-in'])
  }
  signUp(){
    this.router.navigate(['/sign-up'])
  }
}

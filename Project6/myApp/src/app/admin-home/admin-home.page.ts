import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeClients(){
    this.router.navigate(['/my-clients'])
  }
  availableHours(){
    this.router.navigate(['/admin-module'])
  }
  removeSlot(){
    this.router.navigate(['/remove-slot'])
  }
  logOut(){
    this.router.navigate(['/home'])
  }
    
}

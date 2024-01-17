import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  
  selected:any
  constructor(private router:Router,private http: HttpClient,private storage: Storage) { }
  trainers:any
  async ngOnInit() {
     let URL = "http://localhost:3000/trainers";
    this.http.get(URL).subscribe(async res=>{
      this.trainers=res
      this.router.navigate(['/user-home'])
  
    },async error=>{
      console.log(error)
      }
      );
    await this.storage.create();
  }

  async getAppointment(){
    await this.storage.set('selectedTrainer',this.selected)
    this.router.navigate(['/user-module'])
  }

  async seeAppointments(){
    this.router.navigate(['/my-appointments'])
  }

  logOut(){
    this.router.navigate(['/home'])
  }
}

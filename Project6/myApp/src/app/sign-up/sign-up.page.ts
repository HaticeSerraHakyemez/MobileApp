import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  name:string
  surname:string
  username:string
  password:string
  constructor(private router:Router,public navCtrl: NavController,private storage: Storage,private alertController: AlertController,private http: HttpClient) { }

  async ngOnInit() {
    await this.storage.create();
  }
  
  goHome(){
    this.router.navigate(['/home'])
  }

  async userHome(){
    let userInfo={
      name: this.name,
      surname: this.surname,
      username: this.username,
      password: this.password
    }
    
    let URL = "http://localhost:3000/signUp";

    this.http.post(URL,userInfo).subscribe(async res=>{
      await this.storage.set('username',this.username)
      this.router.navigate(['/user-home'])

    },async error=>{
      console.log(error)
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Log in failed.',
        message: 'Please check your inputs.',
        buttons: ['OK'],
      }
      );
      await alert.present();
     
    })
    //this.name="";this.username="";this.surname="";this.password="";
  }
}

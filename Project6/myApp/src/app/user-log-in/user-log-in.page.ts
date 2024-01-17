import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.page.html',
  styleUrls: ['./user-log-in.page.scss'],
})
export class UserLogInPage implements OnInit {
  username: string
  password:string
  constructor(private router: Router,public navCtrl: NavController,private storage: Storage,private alertController: AlertController,private http: HttpClient) { }
  async ngOnInit() {
    await this.storage.create();
  }

  goHome(){
    this.router.navigate(['/home'])
  }

  async userHome(){

    let credentials={
      username: this.username,
      password: this.password
    }
    
    let URL = "http://localhost:3000/user";

    this.http.get(URL,{params:credentials}).subscribe(async res=>{
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
   
  }
}

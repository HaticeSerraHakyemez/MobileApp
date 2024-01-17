import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format  } from 'date-fns';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.page.html',
  styleUrls: ['./admin-module.page.scss'],
})
export class AdminModulePage implements OnInit {
  day:Date
  hour1:number
  hour2:number
  constructor(private router: Router,private http: HttpClient,private storage: Storage,private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async submission(){
    let URL = "http://localhost:3000/setSlot";
    
    const slots=[]

    if(this.hour1>=this.hour2||this.hour2>22||this.hour1<8){
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Submission failed.',
        message: 'Please choose valid hours.',
        buttons: ['OK'],
      }
      );
      await alert.present();
      return
    }

    for(let i= this.hour1;i<this.hour2;i++){
      slots[i-this.hour1]=i
    }
    
    for(let i=0;i<slots.length;i++){
      let data={
        username: await this.storage.get('username'),
        day: format(new Date(this.day), 'yyyy-MM-dd'),
        slot: slots[i]
      }
      this.http.post(URL,data).subscribe(async res=>{
        this.router.navigate(['/admin-module'])
  
      },async error=>{
        console.log(error)
        }
        );
    }
  }
  back(){
    this.router.navigate(['/admin-home'])
  }

}

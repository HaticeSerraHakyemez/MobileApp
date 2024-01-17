import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format  } from 'date-fns';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.page.html',
  styleUrls: ['./user-module.page.scss'],
})
export class UserModulePage implements OnInit {

  slots:any
  day:Date
  selected:any
  constructor(private router:Router,private http: HttpClient,private alertController: AlertController,private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async select(){
    let URL = "http://localhost:3000/trainerSlots";
    let data={
      trainer:await this.storage.get('selectedTrainer'),
      day: format(new Date(this.day), 'yyyy-MM-dd')
    }
    this.http.get(URL,{params:data}).subscribe(async res=>{
      this.slots=res
      for(let slot of this.slots){
        let sl=slot.slot
        let temp
        if(sl<10){
          temp="0"+sl+".00 - "+(sl+1)+".00"
        }
        else{
          temp=sl+".00 - "+(sl+1)+".00"
        }
        slot.mySlot=temp
      }
      this.router.navigate(['/user-module'])
  
    },async error=>{
      console.log(error)
      }
      );
  }

 async getAppointment(){
    let URL = "http://localhost:3000/getAppointment";

     let data={
        trainer: await this.storage.get('selectedTrainer'),
        customer:await this.storage.get('username'),
        day: format(new Date(this.day), 'yyyy-MM-dd'),
        slot: Number(this.selected)
      }
      this.http.post(URL,data).subscribe(async res=>{
        this.select()
        this.router.navigate(['/user-module'])
      },async error=>{
        console.log(error)
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Process failed.',
          message: 'You already have an appointment at this hour.',
          buttons: ['OK'],
        }
        );
        await alert.present();
        }
        );
  }

  back(){
    this.router.navigate(['/user-home'])
  }
}

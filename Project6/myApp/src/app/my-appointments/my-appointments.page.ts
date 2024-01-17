import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format  } from 'date-fns';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  day:Date
  appointments:any
  constructor(private router:Router,private http: HttpClient,private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async select(){
    let URL = "http://localhost:3000/myAppointments";
    let data={
      customer:await this.storage.get('username'),
      day: format(new Date(this.day), 'yyyy-MM-dd')
    }
    this.http.get(URL,{params:data}).subscribe(async res=>{
      this.appointments=res
      for(let appointment of this.appointments){
        let slot=appointment.slot
        let temp
        if(slot<10){
          temp="0"+slot+".00 - "+(slot+1)+".00"
        }
        else{
          temp=slot+".00 - "+(slot+1)+".00"
        }
        appointment.mySlot=temp
        this.http.get("http://localhost:3000/getAdmin",{params:{username:appointment.trainer}}).subscribe(async res=>{
          appointment.trainer=res[0]
        },async error=>{
          console.log(error)
          }
          );
      }
      this.router.navigate(['/my-appointments'])
    },async error=>{
      console.log(error)
      }
      );
  }

  back(){
    this.router.navigate(['/user-home'])
  }

}

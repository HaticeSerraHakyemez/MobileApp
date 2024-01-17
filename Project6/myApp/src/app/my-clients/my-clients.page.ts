import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format  } from 'date-fns';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.page.html',
  styleUrls: ['./my-clients.page.scss'],
})
export class MyClientsPage implements OnInit {

  day:Date
  clients:any
  constructor(private router:Router,private http: HttpClient,private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async select(){
    let URL = "http://localhost:3000/myClients";
    let data={
      trainer:await this.storage.get('username'),
      day: format(new Date(this.day), 'yyyy-MM-dd')
    }
    this.http.get(URL,{params:data}).subscribe(async res=>{
      this.clients=res
      for(let client of this.clients){
        let slot=client.slot
        let temp
        if(slot<10){
          temp="0"+slot+".00 - "+(slot+1)+".00"
        }
        else{
          temp=slot+".00 - "+(slot+1)+".00"
        }
        client.mySlot=temp
        this.http.get("http://localhost:3000/getUser",{params:{username:client.customer}}).subscribe(async res=>{
          client.customer=res[0]
        },async error=>{
          console.log(error)
          }
          );
      }
      this.router.navigate(['/my-clients'])
    },async error=>{
      console.log(error)
      }
      );
  }

  back(){
    this.router.navigate(['/admin-home'])
  }
}

import { Component, OnInit } from '@angular/core';
import { format  } from 'date-fns';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-slot',
  templateUrl: './remove-slot.page.html',
  styleUrls: ['./remove-slot.page.scss'],
})
export class RemoveSlotPage implements OnInit {

  slots:any
  day:Date
  selected:any
  constructor(private router:Router,private http: HttpClient,private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async select(){
    let URL = "http://localhost:3000/trainerSlots";
    let data={
      trainer:await this.storage.get('username'),
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
      this.router.navigate(['/remove-slot'])
  
    },async error=>{
      console.log(error)
      }
      );
  }

 async removeSlot(){
    let URL = "http://localhost:3000/removeSlot";

     let data={
        username: await this.storage.get('username'),
        day: format(new Date(this.day), 'yyyy-MM-dd'),
        slot: Number(this.selected)
      }
      this.http.delete(URL,{params:data}).subscribe(async res=>{
        this.select()
        this.router.navigate(['/remove-slot'])
      },async error=>{
        console.log(error)
        }
        );
  }
  back(){
    this.router.navigate(['/admin-home'])
  }

}

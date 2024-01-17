import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveSlotPageRoutingModule } from './remove-slot-routing.module';

import { RemoveSlotPage } from './remove-slot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveSlotPageRoutingModule
  ],
  declarations: [RemoveSlotPage]
})
export class RemoveSlotPageModule {}

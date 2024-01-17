import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLogInPageRoutingModule } from './admin-log-in-routing.module';

import { AdminLogInPage } from './admin-log-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLogInPageRoutingModule
  ],
  declarations: [AdminLogInPage]
})
export class AdminLogInPageModule {}

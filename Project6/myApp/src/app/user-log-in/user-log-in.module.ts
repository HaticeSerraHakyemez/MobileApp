import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLogInPageRoutingModule } from './user-log-in-routing.module';

import { UserLogInPage } from './user-log-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLogInPageRoutingModule
  ],
  declarations: [UserLogInPage]
})
export class UserLogInPageModule {}

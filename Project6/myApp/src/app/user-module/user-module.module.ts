import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserModulePageRoutingModule } from './user-module-routing.module';

import { UserModulePage } from './user-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserModulePageRoutingModule
  ],
  declarations: [UserModulePage]
})
export class UserModulePageModule {}

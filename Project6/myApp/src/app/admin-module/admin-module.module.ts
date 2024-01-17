import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminModulePageRoutingModule } from './admin-module-routing.module';

import { AdminModulePage } from './admin-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminModulePageRoutingModule
  ],
  declarations: [AdminModulePage]
})
export class AdminModulePageModule {}

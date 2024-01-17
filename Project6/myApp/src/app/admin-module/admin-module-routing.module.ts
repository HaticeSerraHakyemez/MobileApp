import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModulePage } from './admin-module.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModulePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModulePage } from './user-module.page';

const routes: Routes = [
  {
    path: '',
    component: UserModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModulePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLogInPage } from './admin-log-in.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLogInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLogInPageRoutingModule {}

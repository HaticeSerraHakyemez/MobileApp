import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogInPage } from './user-log-in.page';

const routes: Routes = [
  {
    path: '',
    component: UserLogInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLogInPageRoutingModule {}

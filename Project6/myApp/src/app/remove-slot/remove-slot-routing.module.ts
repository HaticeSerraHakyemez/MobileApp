import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveSlotPage } from './remove-slot.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveSlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveSlotPageRoutingModule {}

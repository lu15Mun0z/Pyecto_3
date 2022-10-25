import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GQRPage } from './g-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GQRPageRoutingModule {}

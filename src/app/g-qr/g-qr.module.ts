import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GQRPageRoutingModule } from './g-qr-routing.module';

import { GQRPage } from './g-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GQRPageRoutingModule
  ],
  declarations: [GQRPage]
})
export class GQRPageModule {}

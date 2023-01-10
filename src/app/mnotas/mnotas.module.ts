import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MnotasPageRoutingModule } from './mnotas-routing.module';

import { MnotasPage } from './mnotas.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MnotasPageRoutingModule
  ],
  declarations: [MnotasPage]
})
export class MnotasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearlistaPageRoutingModule } from './crearlista-routing.module';

import { CrearlistaPage } from './crearlista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearlistaPageRoutingModule
  ],
  declarations: [CrearlistaPage]
})
export class CrearlistaPageModule {}

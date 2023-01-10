import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleNotasPageRoutingModule } from './detalle-notas-routing.module';

import { DetalleNotasPage } from './detalle-notas.page';
import { ModuloComponenteModule } from '../componentes/modulo-componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleNotasPageRoutingModule,
    ModuloComponenteModule
  ],
  declarations: [DetalleNotasPage]
})
export class DetalleNotasPageModule {}
